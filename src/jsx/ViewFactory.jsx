'use strict';



export default class ViewFactory {

    constructor(adapter){
        for (let key in this){
            if (!(adapter[key] && (typeof(adapter[key]) === 'function'))) throw new TypeError(`method adapter.${key} must be a function.`);
        }
        this.ObjectFactory = adapter;
    }

    createDbView(db){
        return this.ObjectFactory.createDbView(db);
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