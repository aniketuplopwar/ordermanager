import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LocationListener extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.handleLocationChange(this.context.router.history.location);
        this.unlisten =
            this.context.router.history.listen(this.props.handleLocationChange);
    }

    componentWillUnmount() {
        this.unlisten();
    }


    render() {
        return this.props.children;
    }
}

export default LocationListener;
