(function(){
    var Table = require('./table.js'),
        DataBase = require('./db.js'),
        EventListener = require('./eventListener.js'),
        DataProvider = require('./dataProvider.js'),
        Connector = require('./connector.js');

    var a = new Table();
    var b = new Table();
    var c = new Table();
    
    var db = new DataBase();
    console.log(DataBase);
    console.log(db);

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
