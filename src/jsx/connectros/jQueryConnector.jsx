'use strict';
import Connector from '../Connector.jsx';

export default class jQueryConnector extends Connector{
    constructor({jQuery,path,options}){
        super(options ? options.errorReporting : true);
        this.jQuery = jQuery;
        this.path = path;
    }
    sendRequest(data,success){
        this.jQuery.ajax({
            data: data,
            dataType: 'json',
            error: (a,b,c)=>console.log(`error ${a} ${b} ${c}`),
            method: 'POST',
            success: success ? success : this.success,
            timeout: this.timeout,
            url: this.path
        });
    }
}