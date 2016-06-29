//=require ./eventListener.js
//=require ./field.js

var Table = (function(){
    
    var Table = function(){
        var that = this;
        var fields = [];
        var tableName;
        var tableAlias;
        var dataBase;
    
        //create field and set
        this.addField = function(fieldName){
            fields[fieldName] = new Field(fieldName,that);
            return fields[fieldName];
        }
        
        // return fields list
        this.getFields = function(){
            var result = [];
            for (var i in fields){
                result.push(fields[i]);
            }
            return result;
        }
        
        // return field or false
        this.getField = function(fieldName){
            return fields[fieldName] ? fields[fieldName] : false;
        }
        
        // Update tableName
        this.setTableName = function(name){
            tableName = name;
            that.fireEvent('update');
        }
        // Assign dataBase
        this.setDb = function(db){
            if (db instanceof DataBase){
                dataBase = db;
                that.fireEvent('update');
            }else{
                throw new Error('Argument must be an instance of DataBase');
            }
        }
        
        this.getDbName = function(){
            return dataBase.getName();
        }
        
        // Set table alias and invoke event "update"
        this.setTableAlias = function(alias){
            tableAlias = alias;
            that.fireEvent('update');
        }
        
        // Get current tableName
        this.getTableName = function(){
            return tableName;
        }
        
        // Get current tableName
        this.getTableAlias = function(){
            return tableAlias;
        }
        
        // Return table alias if set or table name
        this.getName = function(){
            return tableAlias ? tableAlias : tableName;
        }
        
    };
    
    // implement EventListener
    Table.prototype = Object.create(EventListener.prototype);
    
    Table.prototype.addFields = function(fieldsList){
        for (var i in fieldsList){
            this.addField(fieldsList[i]);
        }
        this.fireEvent('addFields');
        this.fireEvent('update');
    }
    Table.prototype.getFullName = function(){
            return this.getDbName() + '.' + this.getTableName();
    }
    
    return Table;
})();