(function(){
    var Table = require('./table.js'),
        DataBase = require('./db.js'),
        EventListener = require('./eventListener.js');

    var Statement = function(){
        
        var that = this;
        this.from;
        this.availableTables = [];
        this.joins = [];
        
        
        this.getFrom = function(){
            return this.from;
        }
        
        // Add available table
        this.addAvailableTable = function(table,returnKey){
            var key;
            key = that.availableTables.push(table);
            return !!returnKey ? key-1 : that.availableTables[key-1];
        }
        
        // Add join statement
        this.addJoin = function(join){
            var key;    
            if (!(join instanceof Join)) return false;
            key = that.joins.push(join);
            return that.joins[key-1];
        }
    };
    
    
    Statement.prototype = Object.create(EventListener.prototype);
    
    Statement.prototype.makeJSON = function(){
        var result={};
        result.from = this.from.getTableName();
        result.alias = this.from.getTableAlias();
        result.joins = this.makeJoinsJSON();
        return result;
    };
   
    Statement.prototype.setFrom = function(table){
            this.from = this.addAvailableTable(table);
    }
   
    Statement.prototype.joinTable = function(table,relation,type){
        var join;
        if (!table instanceof Table) return false;
        
        table = this.addAvailableTable(table);
        join = new Join(this.getFrom(),table,type);
        
        join.setRelation(relation[0],relation[1]);
        this.addJoin(join);
        this.fireEvent('update');
        this.fireEvent('join');
        return join;
    }
    
    Statement.prototype.makeJoinsJSON = function(){
        var result = [],key;
        for (key in this.joins){
            result.push(this.joins[key].makeJSON());
        }
        return result;
    }
    Statement.prototype.checkField = function(field){
        
    }

    module.exports = Statement;
    
}).call(this);