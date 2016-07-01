'use strict';
let tables = [];

export default class Database {

    constructor(dbName){
        this.dbName = dbName;
    }

    get tables() {
        return tables;
    }

    addTable(table) {
        this.tables.push(table);
    }

}
