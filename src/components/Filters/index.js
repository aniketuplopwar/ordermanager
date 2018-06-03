import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class Filters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: {}
        }
    }

    prepareDateFilter (){
        return (
            <div>
                {this.prepareDateField({name: 'fromDate', label: 'From'} )}
                <br/>
                {this.prepareDateField({name: 'toDate', label: 'To'} )}
            </div>
        )
    };

    prepareDateField(field){
        return (
            <TextField
                id="date"
                label={field.label}
                type="date"
                name={field.name}
                value={this.state.filter[field.name]}
                style={{margin: '10px'}}
                onChange={this.handleChange(field.name)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        );

    };

    handleChange(name) {
        return (event)=>{
            this.setFormAttribute(name, event.target.value);
        }
    }

    setFormAttribute(name, value){
        const filter = this.state.filter;
        filter[name] = value;
        this.setState({filter});
    }

    handleFilterSubmit(){
        this.props.handleFilterChange(this.state.filter);
    }

    componentWillReceiveProps(nextProps){
        this.setState({filter: nextProps.filters});
    }

    render(){
        return (
            <div style={{width: "300px"}}>
                <form>
                    <List>
                        <ListItem style={{paddingBottom: '20px'}}>
                            <div>
                                <ListItemText primary="Date Range"/>
                                {this.prepareDateFilter()}
                            </div>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button
                                variant="raised"
                                color="secondary"
                                onClick={this.handleFilterSubmit.bind(this)}>
                                Apply
                            </Button>
                        </ListItem>
                    </List>
                </form>
            </div>
        );
    }


}

export  default Filters;

