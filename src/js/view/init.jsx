/**
 * Created by Tom.Yum. on 30.06.2016.
 */
module.exports = (function() {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var $ = require('jQuery');
    var ViewField = require('./field.jsx');
    var Field = require('../field.js');

    var field = new Field('field#1', 'table#1', 'field_alias');
    var vf = new ViewField(field);
    console.log(vf);

    $(document).ready(function () {
        var elem = document.getElementById('example');

        ReactDOM.render(
            <h1>FG</h1>,
            elem
        );
    });
})();