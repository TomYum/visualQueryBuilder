
var Field = (function(){
    
    var Field = function(name,table){
        this.fieldName = name;
        this.table = table;
    };
    
    Field.prototype.getFullName = function(){
        return this.table.getName() + '.' + this.fieldName;
    }
    return Field;
    
})();