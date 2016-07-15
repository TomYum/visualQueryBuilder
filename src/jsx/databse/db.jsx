'use strict';



export default class Database {

    constructor(dbName){
        this.dbName = dbName;
        this.alias;
        this.tables = [];
    }

    getTables() {
        return clone(this.tables);
    }

    addTable(table) {
        if (table instanceof Table)
        this.tables.push(table);
    }
    getName(){
        return this.dbName;
    }
}
