'use strict';

import Database from "./databse/Db.jsx";
//import jQueryConnector from "./connectros/jQueryConnector.jsx";

import ReactDOM from 'react-dom';
import React, {Component} from 'react';

import Request from 'superagent';
import Table from './databse/Table.jsx';
import Field from './databse/Field.jsx';
import ViewTable from './view/ViewTable.jsx';
import ViewDatabase from './view/ViewDb.jsx';
import EventListener from './EventListener.jsx';
/**
let connector = new jQueryConnector({jQuery:jQuery,path:'./controller.php'});
connector.sendRequest({action:'getFields'},()=>console.log('success'));
let view = new ViewFactory(new ReactViewAddapter());
let db = new Database('first DB');
var db_view = view.createDbView(db);
/**/

let db = new Database('cp_carprice_stat');
let table = new Table(db,'table','TABLE_ALIAS');

let fields = [
    new Field(table,'field#1','A1'),
    new Field(table,'field#2'),
    new Field(table,'field#3')
];
table.setFields(fields);

let table_view = <ViewTable table={table}/>;

let db_view = <ViewDatabase DataBase={db} />

window.onload = ()=>{
    let d = ReactDOM.render(db_view,document.getElementById('example'));

    setTimeout(()=>{
        fields.push(new Field(table,'F5','NEW ADDED FIELD'));
    },2000);

    setTimeout(()=>{
        table.setTableAlias('TABLE_ALIAS');
    },3000);


};
