'use strict';

import React, {Component}  from 'react';
import Table from '../databse/Table.jsx';
import Field from '../databse/Field.jsx';
import ViewField from './ViewField.jsx';


export default class ViewTable extends Component {

    constructor(props) {
        super(props);
        let table = this.props.table;
        console.log(table);
        this.state = {};
        this.state.tableName = table.getTableName();
        this.state.tableAlias = table.getTableAlias();
        this.state.tableFullName = table.getFullName();
        this.state.tableFields = table.getFields();
        this.registerUpdateCallbacks();
    }

    registerUpdateCallbacks(){
        let table = this.props.table;
        table.listen('update:alias',this._updateTableAlias,this);
        table.listen('update:fields', this._updateFieldsList,this);
    }

    _updateTableAlias(table){
        this.setState({tableAlias: table.getTableAlias()});
    }

    _updateFieldsList(table){
        this.setState({tableFields: table.getFields()});
    }

    render(){
        let fieldsList = [];

        this.state.tableFields.forEach((field)=>{
            fieldsList.push(<ViewField field={field} key={field.getFullName()}/>);
        });

        return (
            <div className="vqb-table">
                <span className="title">{this.state.tableName}</span>
                <div className="vqb-fields-list">
                    {fieldsList}
                </div>
            </div>
        )
    }

}