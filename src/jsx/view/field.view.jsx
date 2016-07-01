import React from 'react';

class ViewField extends ReactComponent{

    render(){
        return (
            <div></div>
        );
    }
}



var ViewField = function(field){
    var field = field;

    var view = React.createClass({
        getInitialState: function(){
            return {
                fieldName: field.getFieldName(),
                fieldAlias: field.getAlias(),
            }
        },
        render : function(){
            return(
                <div>
                    <span class="field-name">{this.state.fieldName}</span>
                    <span class="field-alias">{this.state.fieldAlias}</span>
                </div>
            );
        }
    })
}