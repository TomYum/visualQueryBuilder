'use strict';
import {defaul as React,Component} from 'react';

class DataBase extends Component{

    constructor(prop){
        super(prop);
    }

    handleLoadTables(){

    }

    //Загрузка таблиц

    //

    render(){
        return (
            <div className="vqb-data-base">
                <div className="header">
                    <span className="title">{this.prop.dbName}</span>
                </div>
                <div className="tables">

                </div>
            </div>
        )
    }
}


DataBase.propTypes = {
    DataBase: React.PropTypes.instanceOf(DataBase).isRequired
}