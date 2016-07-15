'use strict';
import EventListener from '../EventListener.jsx';

export default class Field extends EventListener{
    constructor(table,name,alias){
        super(EventListener.invokeSelfWithChildrenAndParents);
        this.table = table;
        this.name = name;
        this.alias = alias || '';
    }

    getFullName(){
        return `${this.table.getFullName()}.${this.name}`;
    }

    setAlias(value) {
        this.alias = value;
        this.notify('update:alias');
    }

    getAlias(){
        return this.alias;
    }

}