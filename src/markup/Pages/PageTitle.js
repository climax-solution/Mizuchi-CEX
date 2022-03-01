import React, { Component } from 'react'
// import { Container, Row, Col } from 'reactstrap';

class PageTitle extends Component {
    render() {
        return (
            <div className="page_title section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page_title-content">
                                <p>Welcome Back,
                                <span> Maria Pascle</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PageTitle;