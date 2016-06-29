(function(){
    //=require ./db.js
    //=require ./table.js
    //=require ./join.js
    //=require ./statement.js
    //=require ./dataProvider.js
    //=require ./connector.js
    
    var a = new Table();
    var b = new Table();
    var c = new Table();
    
    var db = new DataBase();
    db.setName('cp_carprice');
    
    a.listen('update',function(a,b,c,d){
        console.log(['fields:',a.getFields()]);
    });
    
    db.listen('loadTables',function(a,b,c,d){
        console.log(['tables:',db.getTables()]);
    });
    
   
    var dp = new DataProvider();
    var connector = new Connector();
    connector.controllerUrl = './controller.php';
    dp.setConnector(connector);
    
    //dp.getTableFields(a);
    dp.loadTables(db);
    
   


}).call(this);
