//=require ./eventListener.js

var Statement = (function(){
    
    var Statement = function(){
        
        var that = this;
        this.from;
        this.availableTables = [];
        this.joins = [];
        
        function getFrom(){
            return this.from;
        }
        
        // Add available table
        function addAvailableTable(table,returnKey){
            var key;
            key = that.availableTables.push(table);
            return !!returnKey ? key-1 : that.availableTables[key-1];
        }
        
        // Add join statement
        function addJoin(join){
            var key;    
            if (!(join instanceof Join)) return false;
            key = that.joins.push(join);
            return that.joins[key-1];
        }
    };
    
    
    Statement.prototype = Object.create(EventListener);
    
    Statement.prototype.generateJSON = function(){};
   
   
    Statement.prototype.selectFrom = function(table){
        if (!table instanceof Table) return false;
        this._setVar('_from',table);
    }
    
    Statement.prototype.joinTable = function(table,condition,type){
        var tablesCount,join;
        if (!table instanceof Table) return false;
        
        table = this.addAvailableTable(table);
        join = new Join(this.getFrom(),table,type)
        this.addJoin(join);
        this.fireEvent('update');
        this.fireEvent('join');
        return join;
    }
    
    return Statement;
    
})();