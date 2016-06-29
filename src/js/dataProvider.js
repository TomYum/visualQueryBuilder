var DataProvider = (function(){
    var instance;
    var DataProvider = function(){
        var connector;
        
        this.setConnector = function(connectorObject){
            connector = connectorObject;
        }
    
        this.getConnector = function(){
            return connector;
        }
        
        if (instance){
            return instance;
        }
        if (this && this.constructor === DataProvider ){
            instance = this;
        }else{
            return new DataProvider();
        }
    }
    
    //Load table fields
    DataProvider.prototype.loadTableFields = function(table){
        var tableName,connector,data;
        
        if (!(table instanceof Table)){
            throw new Error('Argument must be an instance of Table.');
        };
        
        tableName = table.getTableName();
        
        data = {
            action: 'getFields',
            from: tableName
        };
        
        if ( connector = this.getConnector() ){
            connector.sendRequest(data,function(data){
                if (data && Array === data.constructor){
                    table.addFields(data);
                }else{
                    throw new Error('Wrong data')
                }
            });    
        }
    }
    
    // Load db tables
    DataProvider.prototype.loadTables = function(db){
        var data;
        if (!(db instanceof DataBase)){
            throw new Error('Argument must be an instance of DataBase');
        }
        
        data = {
            action: 'getTables',
            from: db.getName()
        };
        
        if ( connector = this.getConnector() ){
            connector.sendRequest(data,function(data){
                var table;
                if (data && Array === data.constructor){
                    for ( var i in data){
                        table = new Table();
                        table.setTableName(data[i]);
                        table.setDb(db);
                        db.addTable(table);
                    }
                    db.fireEvent('loadTables');
                }else{
                    throw new Error('Wrong data')
                }
            });    
        }
        
    }
    
    
    return DataProvider;
    
})();