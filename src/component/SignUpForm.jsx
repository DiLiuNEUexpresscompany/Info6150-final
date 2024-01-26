import React from 'react';
import '../css/loginSystems.css';

class SignupForm extends React.Component {


    render() {
        return (
            <div className="lay-wrap">
                <div className="lay-col" style={{backgroundImage: "url(../src/img/Sign_up.jpeg)"}}>
                </div>
                <div className="lay-form lay-regist">
                    <div className="form-inner">
                        <div className="form-tit">WELCOME HOME</div>
                        <form role="form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Please enter username" name="username" maxLength="20" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Please enter email" onKeyUp={this.handleEmailChange} name="email" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Please enter password" name="passwd" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Please comfirm password" name="confirmPasswd" required />
                            </div>
                            <div className="form-link">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" defaultChecked /> <span><a href="javascript:void(0);" target="_blank">I have read and agree to the User Agreement</a></span>
                                </label>
                            </div>
                            <div className="form-button">
                                <button type="button" className="btn btn-submit">Registration</button>
                            </div>
                        </form>
                        <div className="form-footer">
                            Already have an account<a href="javascript:void(0);">Log in now</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Example event handler
    handleEmailChange = (event) => {
        // Handle email input change
    }
}

export default SignupForm;
