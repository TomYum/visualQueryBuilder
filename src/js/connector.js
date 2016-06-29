(function(context){
    var $ = require('jQuery');

    var Connector = function(){
        this.controllerUrl;
        this.timeout = 2000;
        this.errorReporting = true;
        
        this.sendRequest = function(data,success){
            $.ajax({
                data: data,
                dataType: 'json',
                error: this.error,
                method: 'POST',
                success: success ? success : this.success,
                timeout: this.timeout,
                url: this.controllerUrl
            });
        }
        
        this.error = function (a,b,c){
            if(this.errorReporting )console.log('Ajax error');
        }
        this.success = function(a,b,c){}
    }
    module.exports = Connector;
}).call(this);