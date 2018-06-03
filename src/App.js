import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router-hooks';
import { withStyles } from 'material-ui/styles';
import LocationListener from './components/LocationListener';
import Header from './components/header';
import {ExpenseForm, ExpenseListView} from './components/Expenses';
import {OrderForm, OrderListView} from './components/Orders';
import { SnackbarContent } from 'material-ui/Snackbar';
import {getNotificationList, deleteNotification} from "./firebase/notificationService";
import Button from 'material-ui/Button';

import {auth, provider} from './firebase';
import {getUserList} from './firebase/userService';


import './App.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
    loginButton: {
      marginTop: "50px"
    },
    snackbarContentSUCCESS : {
      backgroundColor: "#4CAF50"
    },
    snackbarContentERROR : {
        backgroundColor: "#f00"
    }
};



class App extends Component {

  constructor(){
    super();
    this.state = {
        username: '',
        loggedIn: false,

        user: null// <-- add this line
    }
  }

  componentDidMount() {
      auth.onAuthStateChanged((user) => {
          if (user) {
              this.setState({
                  user,
                  loggedIn: true
              });
          }
      });
  }



    seekNotification(){
        getNotificationList().then((notificationList)=>{
            const notifications =[], notificationRefs = [];
            notificationList.forEach((notification)=>{

                notifications.push(<SnackbarContent
                    className={this.props.classes['snackbarContent'+notification.data.type]}
                    message={notification.data.message}
                />);

                if(notification.data.dismissType == "IMMEDIATE") deleteNotification(notification.refId);
            });

            this.setState({
                notificationList : notifications
            });

        })
    }


  renderLoggedInState(){
    return  (
        <LocationListener handleLocationChange={this.seekNotification.bind(this)}>
        <Switch>
            <Route exact path='/' component={OrderListView} />
            <Route path='/order/:refId?' component={OrderForm} />
            <Route path='/orderList' component={OrderListView} />
            <Route path='/expense/:refId?' component={ExpenseForm} />
            <Route path='/expenseList' component={ExpenseListView} />
        </Switch>
        </LocationListener>
    );
  }

  login(){
      let registeredUsers= [];
      getUserList().then((userList)=>{
          registeredUsers = userList.map((user)=>{
            return user.email;
          });
      });
      auth.signInWithPopup(provider)
          .then((result) => {
              if(registeredUsers.length > 0 && registeredUsers.indexOf(result.user.email)> -1){
                  const user = result.user;
                  this.setState({
                      user,
                      loggedIn: true
                  });
              }

          });
  }

  logout() {
      auth.signOut()
          .then(() => {
              this.setState({
                  user: null,
                  loggedIn: false
              });
          });
  }

  renderLoggedOutState(){
    return (
        <Button
            variant="raised"
            color="primary"
            onClick={this.login.bind(this)}
            className={this.props.classes.loginButton}
          >
          Sign In Using Google
        </Button>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <Header isLoggedIn={this.state.loggedIn}/>
                {this.state.notificationList}
                {this.state.loggedIn ? this.renderLoggedInState() : this.renderLoggedOutState()}
            </div>
          </BrowserRouter>
      </div>
    );
  }
}



export default withStyles(styles)(App);
