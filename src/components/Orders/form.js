import React from 'react';
import {CollectionDataForm} from '../Collection';
import {FORM_CONFIG} from './config';
import {notify} from "../../firebase/notificationService";

const NOTIFICATION_MESSAGES = {
    "UPDATE": "Order Updated successfully!!",
    "DELETE": "Order deleted successfully!!",
    "ADD": "Order Added Successfully!!",
    "ERROR": "Oops!! Something went wrong"
};

export default class OrderForm extends React.Component{
    constructor(props){
        super(props);
    }

    navigateToHome(){
        this.props.history.push("/orderList");
    }

    onSuccess(actionType){
        notify({type: "SUCCESS", message: NOTIFICATION_MESSAGES[actionType]});
        this.navigateToHome();
    }

    onFailure(error){
        notify({type: 'ERROR', message: NOTIFICATION_MESSAGES.ERROR});
        this.navigateToHome();
    }

    render(){
        return (
            <div>
                <CollectionDataForm refId={this.props.match.params['refId']}
                                    collectionName='orders'
                                    collectionConfig={FORM_CONFIG}
                                    cancelAction={this.navigateToHome.bind(this)}
                                    successAction={this.onSuccess.bind(this)}
                                    failureAction={this.onFailure.bind(this)}
                />
            </div>
        );
    }
}
