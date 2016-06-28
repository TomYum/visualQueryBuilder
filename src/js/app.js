(function(){
    //=require ./table.js
    //=require ./join.js
    
    var a = new Table();
    var b = new Table();
    /*
    a.listen('update',function(a,b,c,d){
        console.log([a,b,c,d]);
    });/**/
    
    a.setTableName('table_a');
    a.setTableAlias('ta');
    b.setTableName('table_b');
    
    var f1 = a.addField('field_a_1');
    a.addField('field_a_2');
    a.addField('field_a_3');
    var f2 = b.addField('field_b_1');
    b.addField('field_b_2');
    console.log(a.getFields());
    console.log(b.getFields());
    
    join = new Join(a,b);
    join.setRelation(f1,f2);
    console.log(join.makeJSON());


}).call(this);
