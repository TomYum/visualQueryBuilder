'use strict';

export default class ClassNames{
    constructor(classes){
        this.classes = {};
        if (classes){
            this.classes = classes;
        }
    }

    toString(){
        let result ='';
        let first = 1;
        for (let className in this.classes){
            if (!first){
                result += ' ';
            }
            result += this.classes[className] ? className : '';
            first = 0;
        }
        return result;
    }
}