//=require ./eventListener.js

var DataBase = (function(){
    var DataBase = function(){
        var dbName;
        var tables = {};
        
        this.setName = function(name){
            dbName = name;
        }
        this.getName = function(){
            return dbName;
        }
        this.getTables = function(){
            return tables;
        }
        this.addTable = function(table){
            var tableName;
            
            if (!(table instanceof Table)){
                throw new Error('Arguments must be an instance of Table');
            }
            tableName = table.getTableName();
            tables[tableName] = table;
        }
        this.getTable = function(tableName){
            return tables[tableName];
        }
    }
    DataBase.prototype = Object.create(EventListener.prototype);
    
    return DataBase;
})()