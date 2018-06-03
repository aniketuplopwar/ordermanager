import React from 'react';
import Tune from 'material-ui-icons/Tune';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';

import Filters from './index';
import styles from './styles';

class FiltersDrawer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drawer: {open: false}
        }
    }

    toggleDrawer() {
        return (e) =>
            (this.state.drawer.open) ?
                this.setState({ drawer: { open: false } }) :
                this.setState({ drawer: { open: true } });
    }

    render(){
        const {classes, filters, onFilterChange, anchor="right"} = this.props;
        return(
            <Toolbar className={classes.toolbar}>
                <Drawer open={this.state.drawer.open} onClose={this.toggleDrawer()} anchor={anchor}>
                    <Filters handleFilterChange={onFilterChange}
                             classes={classes}
                             filters={filters}
                    />
                </Drawer>
                <div className={classes.logoContainerStyle}>Orders List</div>
                <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" >
                    <Tune onClick={this.toggleDrawer()} />
                </IconButton>
            </Toolbar>
        )
    }
}

export default withStyles(styles)(FiltersDrawer);