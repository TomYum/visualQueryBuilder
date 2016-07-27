import React, {Component}  from 'react';
import DataBase from '../databse/Db.jsx'
import Table from '../databse/Table.jsx'
import ViewTable from '../view/ViewTable.jsx';
import ClassNames from '../lib/ClassNames.jsx';


class DbViewTable extends ViewTable{
    constructor(props){
        super(props)
        this.state.isCollapsed = true
        this.toggleFieldsList = this.toggleFieldsList.bind(this);
    }

    toggleFieldsList(){
        this.setState({isCollapsed: !this.state.isCollapsed});
    }

    render(){
        let tableClass = new ClassNames({
            'vqb-table': true,
            'fields-collapsed': this.state.isCollapsed,
        });

        return(
            <div className={tableClass} >
                <span className="title" onDoubleClick={this.toggleFieldsList}>{this.state.tableName}</span>
                <div className="vqb-fields-list">
                    {fieldsList}
                </div>
            </div>
        )
    }
}


export default class ViewDatabase extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.state.title = props.DataBase.getName();
        this.state.tables = [];
        this.state.isCollapsed = true;
        this.toggleTables = this.toggleTables.bind(this);
    }

    changeState(key,val){
        this.setState({[key]:val});
    }

    handlerDblClick(){

    }

    loadTables(){
        if (this.props.DataBase){

        }
    }

    toggleTables(){
        this.setState({isCollapsed: !this.state.isCollapsed});
    }

    render(){
        let title, title_raw;
        if (this.state.alias) {
            title = this.state.alias;
            title_raw = `(${this.state.title})`;
        } else {
            title = this.state.title;
            title_raw = '';
        }

        let tableClass = new ClassNames({
            'vqb-tables': true,
            'table-collapsed': this.state.isCollapsed,
        });


        return (
            <div className="vqb-db">
                <div className="title" onDoubleClick={this.toggleTables}>{title} {title_raw}</div>
                <div className={tableClass}>
                    <div className="vqb-table">
                        <span className="title">FFFG</span>
                        <div className="vqb-fields-list">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

ViewDatabase.propTypes = { DataBase: React.PropTypes.instanceOf(DataBase).isRequired };

/*
 export default class ViewDatabaase extends React.Component{

 constructor(){
 return {
 fields : [],
 title: 'unnamed db'
 }
 }

 render(){
 let title,title_raw;
 if ( this.state.alias ) {
 title = this.state.alias;
 title_raw = `(${this.state.title})`;
 }else{
 title = this.state.title;
 title_raw = '';
 }

 return (
 <div class="vqb-db">
 <div class="title">{title} {title_raw}</div>
 <div class="fields">

 </div>
 </div>
 );
 }
 }
 /**/