'use strict';

export default class Connector{

    constructor(errorReporting = true){
        this.errorReporting = errorReporting;
    }
    sendRequest(){
        return
    }
    error(){
        if(this.errorReporting){
            console.log('Ajax error');
        }
    }
    success(data){
        console.log(data);
    }
}
