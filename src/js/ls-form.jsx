import React from 'react';
import ReactDOM from 'react-dom';
class SignUpForm extends React.PureComponent{
    render(){
        return(
            <form action="./" method="post" className="sign-up-form">
				<h2><span className="c-cntr">Become</span> one of us!</h2>
                <div className="body-container">
                    <label className="name" htmlFor="name">
                        <span>Name</span>
                        <input type="text" name="name" id="name"/>
                    </label>
                    <label className="surname" htmlFor="surname">
                        <span>Surname</span>
                        <input type="text" name="surname" id="surname"/>
                        </label>
                    <div className="date-container">
                        <label htmlFor="day">
                            <span>Day</span>
                            <input className="day" type="text" name="day" id="day"/>
                        </label>
                        <label htmlFor="month">
                            <span>Month</span>
                            <input className="month" type="text" name="month" id="month"/>
                        </label>
                        <label className="year" htmlFor="year">
                            <span>Year</span>
                            <input className="year" type="text" name="year" id="year"/>
                        </label>
                    </div>
                    <button type="submit" className="sendbtn"><span className="c-cntr">Next</span> step</button>
                </div>
				<a href="./mb-add-on.php" className="button"><span><span className="c-cntr">Sign</span> up</span></a>
			</form>
        )
    }
}

class LoginForm extends React.PureComponent{
    render(){
        return(
            <form action="./" method="post" className="login-form">
                <h1 className="greetings"><span className="c-cntr">W</span>elcome!</h1>
                <label htmlFor="login" className="l-login">
                    <span>Login</span>
                    <input type="text" name="login" id="login"/>
                </label>
                <label htmlFor="pass" className="l-pass">
                    <span>Password</span>
                    <input type="password" name="pass" id="pass"/>
                </label>
                <div className="checkbox">
                    <input hidden type="checkbox" name="remember" id="remember"/>
                    <label htmlFor="remember">
                        <div className="box"></div>
                        Remember <span className="c-cntr">me</span>
                    </label>
                </div>
                <div className="final-login">
                    <a href="#" className="forgot">Forgot your password<span className="c-cntr">?</span></a>
                    <button className="login-form__submit" type="submit"><span className="c-cntr">Log</span> in</button>
                </div>
            </form>
        )
    }
}

class Login extends React.PureComponent{
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    render(){            
        return(
            <React.StrictMode>
                <LoginForm/>
                {document.getElementsByClassName('full-logo')[0].style.display != 'none' && <SignUpForm/>}
            </React.StrictMode>
        )
    }
}

export default Login;
