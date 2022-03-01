import React, { Component } from 'react';
import {
    NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import HeaderLanding from '../Layout/HeaderLanding'

class Reset extends Component {
    render() {
        return (
            <div>
                <HeaderLanding />
                <div className="authincation section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Reset password</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="hello@example.com" />
                                            </div>
                                            <div className="text-center">
                                                <NavLink to="signin" className="btn btn-success btn-block" tag={RRNavLink}>Reset</NavLink>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p className="mb-1 d-inline-block">Don't Received? </p>
                                            <NavLink className="text-primary d-inline-block" to="reset" tag={RRNavLink}>Resend </NavLink>
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
export default Reset;