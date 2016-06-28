(function(){
    //=require ./table.js
    //=require ./join.js
    
    var a = new Table();
    var b = new Table();
    var c = new Table();
    /*
    a.listen('update',function(a,b,c,d){
        console.log([a,b,c,d]);
    });/**/
    
    a.setTableName('table_a');
    a.setTableAlias('ta');
    b.setTableName('table_b');
    c.setTableName('table_c');
    
    a.addField('field_a_1');
    a.addField('field_a_2');
    a.addField('field_a_3');
    b.addField('field_b_1');
    b.addField('field_b_2');
    c.addField('field_c_1');
    
    var f1 = a.getField('field_a_2');
    var f2 = b.getField('field_b_2');
    var f3 = c.getField('field_c_1');
    console.log(a.getFields());
    console.log(b.getFields());
    
    join = new Join(a,b);
    join.setRelation(f1,f3);
    console.log(join.makeJSON());


}).call(this);
