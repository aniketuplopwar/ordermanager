import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';


import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom';



const styles = theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        color: "#fff",
        marginLeft: -12,
        marginRight: 20,
        position: 'relative',
        zIndex: 1
    },
    list: {
        width: '300px',
        background: theme.palette.background.paper
    },
    logoContainerStyle : {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: '20px',
        left: '0'
    },
});

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            notificationList : [],
            drawer: {
                open: false
            }
        };
    }


    toggleDrawer() {
        return (e) =>
            (this.state.drawer.open) ?
                this.setState({ drawer: { open: false } }) :
                this.setState({ drawer: { open: true } });
    }



     sideList(classes) {
         return (
             <div className={classes.list}>
                 <List>
                     <Link to="order" style={{textDecoration: 'none'}}>
                         <ListItem button>
                             <ListItemText primary="Add Order"/>
                         </ListItem>
                     </Link>
                     <Link to="orderList" style={{textDecoration: 'none'}}>
                         <ListItem button>
                             <ListItemText primary="Order List"/>
                         </ListItem>
                     </Link>
                     <Divider/>

                     <Link to="expense" style={{textDecoration: 'none'}}>
                         <ListItem button>
                             <ListItemText primary="Add Expense"/>
                         </ListItem>
                     </Link>
                     <Link to="expenseList" style={{textDecoration: 'none'}}>
                         <ListItem button>
                             <ListItemText primary="Expense List"/>
                         </ListItem>
                     </Link>
                 </List>
             </div>
         )
     };

    loggedInHeader (classes){
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" >
                            <MenuIcon onClick={this.toggleDrawer()} />
                        </IconButton>

                        <div className={classes.logoContainerStyle}>
                            Cake Orders
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.drawer.open} onClose={this.toggleDrawer()}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer()}
                        onKeyDown={this.toggleDrawer()}
                    >
                        {this.sideList(classes)}
                    </div>
                </Drawer>
            </div>);
    };

    loggedOutHeader(classes){
        return ( <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <div className={classes.logoContainerStyle}>
                        Cake Orders
                    </div>
                </Toolbar>
            </AppBar>
        </div>)
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.props.isLoggedIn ? this.loggedInHeader(classes) : this.loggedOutHeader(classes)}
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);