(function () {

    var Field = function (name, table, alias) {
        this.fieldName = name;
        this.table = table;
        this.alias = alias;
    };

    Field.prototype.getFullName = function () {
        return this.table.getName() + '.' + this.fieldName;
    }
    Field.prototype.getAlias = function(){
        return this.alias;
    }
    Field.prototype.getName = function(){
        return this.alias ? this.alias : this.getFullName();
    }
    Field.prototype.getFieldName = function(){
        return this.name;
    }
    module.exports = Field;

}).call(this);
