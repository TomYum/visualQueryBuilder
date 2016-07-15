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
        for (let className in this.classes){
            result += this.classes[className] ? className : '';
        }
        return result;
    }
}