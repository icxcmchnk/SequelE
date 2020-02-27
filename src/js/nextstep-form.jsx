import React from 'react';
import ReactDOM from 'react-dom';

class SignUp extends React.PureComponent{
    render(){
        return(
            <>
                <div className="body-container">
                    <label className="login" htmlFor="login">
                        <span>Login</span>
                        <input type="text" name="login" id="login"/>
                    </label>
                    <label className="password" htmlFor="password">
                        <span>Password</span>
                        <input type="text" name="password" id="password"/>
                    </label>
                    <label className="repeat-password" htmlFor="repeat-password">
                        <span><span className="c-cntr">Repeat</span> Password</span>
                        <input type="text" name="repeat-password" id="repeat-password"/>
                    </label>
                    <label className="email" htmlFor="email">
                        <span>E-Mail</span>
                        <input type="text" name="email" id="email"/>
                    </label>
                    <label className="code" htmlFor="code">
                        <span className="c-cntr">Code</span>
                        <div className="code-container">
                            <input className="code-input" type="text" name="code" id="code"/>
                            <a href="#" className="code-link-reload"><img className="code-img-reload" src="../src/img/reload.svg" alt="Reload"/></a>
                        </div>
                    </label>
                    <button type="submit" className="sendbtn"><span className="c-cntr">Sign</span> up</button>
                </div>
                <div className="login-back">
                    <h2><span className="c-cntr">Already</span> have an account?</h2>
                    <a href="#" className="button"><span><span className="c-cntr">Log</span> in</span></a>
                </div>
            </>
        )
    } 
}


export default SignUp;