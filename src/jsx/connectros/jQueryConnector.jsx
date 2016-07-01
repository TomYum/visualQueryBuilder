'use strict';
import Connector from '../connector.jsx';

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
            error: this.error,
            method: 'POST',
            success: success ? success : this.success,
            timeout: this.timeout,
            url: this.controllerUrl
        });
    }
}