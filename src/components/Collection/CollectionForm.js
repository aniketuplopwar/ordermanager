import React from 'react';
import Form from './Form';

export default class CollectionForm extends React.Component{
    constructor(props){
        super(props);
        this.service = this.props.service;
        this.state = {
            data: {}
        }
    }

    onSubmit(formData){
        let actionType = 'ADD';

        if(this.state.refId) actionType = 'UPDATE';

        return this.service.saveDoc(formData, this.state.refId)
            .then(()=>
                this.props.successAction(actionType)
            ).catch(this.props.failureAction);
    }

    deleteData(refId){
        if(window.confirm('Are you sure?') == true){
            return this.service.deleteDoc(refId).then(()=>{
                this.props.successAction('DELETE');
            }).catch(this.props.failureAction)
        }
    }

    componentWillReceiveProps({refId}){
        if(refId){
            this.service.getDoc(refId).then((data)=>{
                if(!data)this.onFailure();
                this.setState({data, refId});
            }).catch(this.props.failureAction);
        }
    }

    render(){
        const {collectionConfig, cancelAction} = this.props;
        return (
            <Form refId={this.state.refId}
                  formConfig={collectionConfig}
                  formValues={this.state.data}
                  onSubmit={this.onSubmit.bind(this)}
                  cancel={cancelAction}
                  delete={this.deleteData.bind(this)}
            />
        );
    }
}

