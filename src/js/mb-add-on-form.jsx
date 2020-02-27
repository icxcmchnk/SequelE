import React from 'react';
import ReactDOM from 'react-dom';

class SignUp extends React.PureComponent{
    render(){
        return (
            <>
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
                            <input className="day" type="text" name="day" id="day"/>
                            <span>Day</span>
                        </label>
                        <label htmlFor="month">
                            <input className="month" type="text" name="month" id="month"/>
                            <span>Month</span>
                        </label>
                        <label className="year" htmlFor="year">
                            <input className="year" type="text" name="year" id="year"/>
                            <span>Year</span>
                        </label>
                    </div>
                    <button type="submit" className="sendbtn"><span className="c-cntr">Next</span> step</button>
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