import '../scss/nextstep-index.scss';

document.querySelector('.logo-name').addEventListener('dblclick', function(){
    document.getSelection().selectAllChildren(this);
})

// React
import SignUp from './nextstep-form.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<SignUp/>, document.getElementById('suForm'))

