//=require ./field.js

var Join = (function(){
    
    function in_array(needle,haystack,strict){
        var val, strict = !!strict;
        for (var i in haystack ){
            val = haystack[i];
            if ((!strict && val==needle) || (strict && val===needle)) {
                return true;
            }
        }
        return false;
    }
    
    var availableOperators = ['=','LIKE'];
    
    var Join = function(tableFrom,joinedTable,type){
        if (!(tableFrom instanceof Table) || !(joinedTable instanceof Table)){
            throw new SyntaxError('All arguments must be an instance of Table');
        }
        
        this.tableFrom = tableFrom;
        this.joinedTable = joinedTable;
        this.conditions = [];
        this.relation;
        this.joinType = type ? type : 'inner';
    };
    
    Join.prototype.addCondition = function(field,value,operator){
        
        this.checkField(field,true);
        
        if (!in_array(operator,availableOperators)){
            throw new SyntaxError('Wrong operator!');
        }
        this.conditions.push({
            field: field,
            operator: operator,
            value: value
        });
    };
    
    
    Join.prototype.setRelation = function(field_a,field_b){
        if (!(field_a instanceof Field) && !(field_b instanceof Field)){
            throw new SyntaxError('Arguments must be an instance of Field');
        }
        this.checkField(field_a,true);
        this.checkField(field_b,true);
        
        this.relation = [field_a,field_b]
    };
    
    Join.prototype.checkField = function(field,dropException){
        var haystack, availableFields;
        
        availableFields = this.getAvailableFields();
            
        for (var i in availableFields){
            haystack = availableFields[i];
            if (in_array(field,haystack)){
                return true;
            }
        }
        if (!!dropException){
            throw new Error('Field "' + field.fieldName +'" not found on available fieldsList');
        } 
        return false;
    }
    
    Join.prototype.makeJSON = function(){
        var json,condition,record;
        condition = this.relation[0].getFullName() + ' = ' + this.relation[1].getFullName();
        for (var i in this.conditions){
            record = this.conditions[i];
            condition += " AND " + record.field.getFullName() + record.operator + "'" + record.value + "'";
        }
        
        return {
            type: this.joinType,
            table: this.joinedTable.getName(),
            from: this.tableFrom.getName(),
            alias: this.joinedTable.getTableAlias(),
            on: condition
        }
    }
    
    Join.prototype.getAvailableFields = function(){
        var fields = [];
        fields.push(this.tableFrom.getFields());
        fields.push(this.joinedTable.getFields());
        return fields;
    };
    
    return Join;
    
})();