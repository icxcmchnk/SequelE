"use strict"
import '../scss/index.scss';
document.querySelector('.logo-name').addEventListener('dblclick', function(){
    document.getSelection().selectAllChildren(this);
})
// React
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './ls-form.jsx';
ReactDOM.render(<Login/>, document.getElementById('form-container'))

// Tests and trainings
