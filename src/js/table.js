//=require ./eventListener.js
//=require ./field.js

var Table = (function(){
    
    var Table = function(){
        var that = this;
        var fields = [];
        var tableName;
        var tableAlias;
    
        this.addField = function(fieldName){
            var key = fields.push(new Field(fieldName,that));
            return fields[key-1];
        }
        
        // return fields
        this.getFields = function(){
            var result = [];
            for (var i in fields){
                result.push(fields[i]);
            }
            return result;
        }
        
        // Update tableName
        this.setTableName = function(name){
            tableName = name;
            that.fireEvent('update');
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
    };
    
    // implement EventListener
    Table.prototype = Object.create(EventListener.prototype);
    
    
    
    return Table;
})();