'use strict';
import React, { Component, PropTypes } from 'react';
import ViewField from './view/ViewField.jsx';
import ViewDatabase from './view/ViewDb.jsx';

export default class ReactViewAdapter{
    createDbView(db){
        let title = db.dbName;
        let view = <ViewDatabase title={title} DataBase={db}></ViewDatabase>;
        return view;
    }
    createTableView(table){
        return this.ObjectFactory.createTableView(table);
    }
    createFieldView(field){
        return this.ObjectFactory.createFieldView(field);
    }
    createStatementView(statement){
        return this.ObjectFactory.createStatementView(statement);
    }
}