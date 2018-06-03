import React from 'react';
import {CollectionView, getCollectionService} from '../Collection';
import FiltersDrawer from '../Filters/FiltersDrawer';
import {FORM_CONFIG, VIEW_CONFIG} from "./config";
import OrderSummary from './OrderSummary';

export default class OrderListView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collection: [],
            filters: []
        };
        this.service = getCollectionService('orders');
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentDidMount(){
        this.service.getCollection().then((collection)=>{
            this.setState({collection});
        });
    }

    onFilterChange(filters){
        this.service.getCollectionWithFilter(filters).then((collection)=>{
            this.setState({
                collection,
                drawer: { open: false },
                filters
            });
        })
    }

    render(){
        return(
            <div>
                <FiltersDrawer
                    filters={this.state.filters}
                    onFilterChange={this.onFilterChange}
                />
                <OrderSummary orders={this.state.collection} />
                <CollectionView collection={this.state.collection}
                                collectionConfig={FORM_CONFIG}
                                viewConfig={VIEW_CONFIG} />
            </div>
        );
    }
}