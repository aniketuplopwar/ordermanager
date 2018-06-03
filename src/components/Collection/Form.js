import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import {FormControl} from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Button from 'material-ui/Button';
import styles from './FormStyles';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: {}
        }
    }

    setFormAttribute(name, value){
        const form = this.state.form;
        form[name] = value;
        this.setState({form});
    }

    handleChange(name) {
        return (event)=>{
            this.setFormAttribute(name, event.target.value);
        }
    }

    prepareTextField(key, field){
        const {classes} = this.props;
        return (
            <TextField
                id={key}
                key={'form-'+key}
                type={field.type}
                label={field.label}
                className={classes.textField}
                value={this.state.form[key]}
                onChange={this.handleChange(key)}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        );
    }

    prepareSelectField(key, field) {
        const {classes} = this.props;
        return (
            <FormControl className={classes.formControl} key={'form-'+key}>
                <InputLabel htmlFor={key}>{field.label}</InputLabel>
                <Select
                    value={this.state.form[key]? this.state.form[key] : field.defaultValue}
                    onChange={this.handleChange(key)}
                    name={key}
                    autoWidth
                >
                    {field.options.map(option=>{return (
                        <MenuItem value={option.value}>
                            {option.label}
                        </MenuItem>
                    )})}

                </Select>
            </FormControl>
        );

    }

    renderDeleteButton(refId){
        return(
            <Button
                variant="raised"
                color="secondary"
                className={this.props.classes.button}
                onClick={()=>this.props.delete(refId)}>
                Delete
            </Button>)
    }

    renderField(key, field){
        switch(field.type){
            case 'select':
                return this.prepareSelectField(key,field);

            default:
                return this.prepareTextField(key, field);
        }
    }

    componentWillReceiveProps({formValues}){
        this.setState({form: formValues});
    }

    render(){
        const { classes, formConfig } = this.props;
        return (
            <Card className={classes.card}>
                <form noValidate autoComplete="off">
                    {Object.keys(formConfig).map((key, idx)=>{
                        return this.renderField(key,formConfig[key]);
                    })}

                    <div className={classes.footer}>
                        <Button
                            variant="raised"
                            color="primary"
                            className={classes.button}
                            onClick={()=>this.props.onSubmit(this.state.form)}>
                            {this.props.refId ? "Update" : "Add"}
                        </Button>

                        <Button
                            variant="raised"
                            color="secondary"
                            className={classes.button}
                            onClick={this.props.cancel}>
                            Cancel
                        </Button>

                        {this.props.refId ? this.renderDeleteButton(this.props.refId) : ""}
                    </div>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(Form);
