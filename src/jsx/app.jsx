'use strict';

import Database from "./databse/db.jsx";
import jQueryConnector from "./connectros/jQueryConnector.jsx";
import jQuery from 'jQuery';

console.log(jQuery.ajax());
let connector = new jQueryConnector(jQuery,'controller.php');
connector.sendRequest({},()=>console.log('success')); 
