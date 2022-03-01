import React, { Component } from 'react';
import {
    NavLink,
} from 'reactstrap';
import HeaderLanding from './../Layout/HeaderLanding'
import { NavLink as RRNavLink } from 'react-router-dom';

class Signin extends Component {
    render() {
        return (
            <div>
                <HeaderLanding/>
                <div className="authincation section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Sign in</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="hello@example.com" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" name="password" />
                                            </div>
                                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                                <div className="form-group mb-0">
                                                    <label className="toggle">
                                                        <input className="toggle-checkbox" type="checkbox" />
                                                        <div className="toggle-switch"></div>
                                                        <span className="toggle-label">Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <NavLink to="reset" tag={RRNavLink}>Forgot Password?</NavLink>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <NavLink className="btn btn-success btn-block" to="otp1" tag={RRNavLink}>Sign in</NavLink>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p>Don't have an account? <NavLink className="text-primary d-inline-block" to="signup" tag={RRNavLink}>Sign
                                            up</NavLink></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg_icons"></div>
            </div>

        )
    }
}
export default Signin;