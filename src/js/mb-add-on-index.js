import '../scss/mb-add-on-index.scss';

function redirect(){
    if(screen.width >= 1000){
        window.location.replace('./index.php')
    }
}

document.querySelector('.logo-name').addEventListener('dblclick', function(){
    document.getSelection().selectAllChildren(this);
})

// React
import SignUp from './mb-add-on-form.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<SignUp/>, document.getElementById('suForm'));