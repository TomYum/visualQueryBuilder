'use strict';
import EventListener from '../EventListener.jsx';

export default class Table extends EventListener{
    constructor(db,name,alias,...options) {
        super(EventListener.invokeSelfWithChildrenAndParents);
        this.dataBase = db;
        this.tableName = name;
        this.tableAlias = alias || '';
        this.tableOptions = options;
        this.fields = [];
    }

    getTableName(){
        return this.tableName;
    }

    getFullName(){
        return `${this.dataBase.getName()}.${this.tableName}`;
    }

    getTableAlias() {
        return this.tableAlias;
    }

    setTableAlias(tableAlias){
        this.tableAlias = tableAlias;
        this.notify('update:alias');
    }

    getFields(){
        return this.fields;
    }

    setFields(fields){

        if (!(fields instanceof Array)){
            throw new TypeError('Fields must be an Array of Fields');
        }

        this.fields = fields;
        this.notify('update:fields');
    }

    toJSON(){
        let object = {};
        object.name = this.tableName;
        object.alias = this.tableAlias;

        return object;
    }
}