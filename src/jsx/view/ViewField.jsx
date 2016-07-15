import React from 'react';
import 'react-dom';

export default class ViewField extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.fieldName = props.field.getFullName();
        this.state.fieldAlias = props.field.getAlias();
        props.field.listen('update',(o)=>{
            this.state.fieldName = o.getFullName();
            this.state.fieldAlias = o.getAlias();
        })
    }



    render(){
        return (
            <div className="vqb-table-field">
                <span className="field-name">{this.state.fieldName}</span>
                <span className="field-alias">{this.state.fieldAlias}</span>
            </div>
        );
    }
}