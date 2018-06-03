import React from 'react';
import {CollectionDataForm} from '../Collection';
import {FORM_CONFIG, FORM_VALIDATION_CONFIG} from './config';
import {notify} from "../../firebase/notificationService";

const NOTIFICATION_MESSAGES = {
    "UPDATE": "Expense Updated successfully!!",
    "DELETE": "Expense deleted successfully!!",
    "ADD": "Expense Added Successfully!!",
    "ERROR": "Oops!! Something went wrong"
};

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
    }

    navigateToHome(){
        this.props.history.push("/expenseList");
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
                                    collectionName='expenses'
                                    collectionConfig={FORM_CONFIG}
                                    formValidationConfig={FORM_VALIDATION_CONFIG}
                                    cancelAction={this.navigateToHome.bind(this)}
                                    successAction={this.onSuccess.bind(this)}
                                    failureAction={this.onFailure.bind(this)}
                />
            </div>
        );
    }
}
