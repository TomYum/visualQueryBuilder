'use strict';
import '../EventListener.jsx';
import './Table.jsx';

class Statement extends EventListener{
    constructor(table = null){
        super();
        //
        this.selectFrom;
        this.joins = [];
        this.selectedFields = [];

        this.selectFromTable(table);

    }

    joinTable(table,condition){

    }

    selectFromTable(table){
        if (table instanceof Table) {
            this.selectFrom = table;
            return this;
        }
        throw new TypeError('table must be an instance of Table');
    }


}

export default Statement;