/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Row,
    Label,
    Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from 'react-redux-form';
const required = (val) => val && val.length;

const maxLength = (len) => (val) => !val || (val.length < len);

const minLength = (len) => (val) => val && (val.length >= len);

const isNumber = (val) => !isNaN(val);

const isValidEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    
class Contact extends Component {

    handleSubmit() {
        return (values) => {
            this.props.postFeedback(values);
            this.props.resetFeedbackForm(values);
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road
                            <br />
                            Clear Water Bay, Kowloon
                            <br />
                            HONG KONG
                            <br />
                            <i className="fa fa-phone"></i>: +852 1234 5678
                            <br />
                            <i className="fa fa-fax"></i>: +852 8765 4321
                            <br />
                            <i className="fa fa-envelope"></i>:{" "}
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a
                                role="button"
                                className="btn btn-primary"
                                href="tel:+85212345678"
                            >
                                <i className="fa fa-phone"></i> Call
                            </a>
                            <a role="button" className="btn btn-info">
                                <i className="fa fa-skype"></i> Skype
                            </a>
                            <a
                                role="button"
                                className="btn btn-success"
                                href="mailto:confusion@food.net"
                            >
                                <i className="fa fa-envelope-o"></i> Email
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model='feedback' onSubmit={this.handleSubmit()}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>
                                First Name
                            </Label>
                            <Col md={10}>
                                <Control.text
                                    model=".firstname"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            maxLength: maxLength(15),
                                            minLength: minLength(2)
                                        }
                                    }
                                />
                                <Errors className="text-danger my-2"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>
                                Last Name
                            </Label>
                            <Col md={10}>
                                <Control.text
                                    model=".lastname"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            maxLength: maxLength(15),
                                            minLength: minLength(2)
                                        }
                                    }
                                />
                                <Errors className="text-danger my-2"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required field. ",
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>
                                Contact Tel.
                            </Label>
                            <Col md={10}>
                                <Control.text
                                    model=".telnum"
                                    id="telnum"
                                    name="telnum"
                                    placeholder="Tel. Number"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            isNumber
                                        }
                                    }
                                />
                                <Errors className="text-danger my-2"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required field. ",
                                            isNumber: "Please enter a valid number"
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>
                                Email
                            </Label>
                            <Col md={10}>
                                <Control.text
                                    className="form-control"
                                    model=".email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    validators={
                                        {
                                            required,
                                            isValidEmail
                                        }
                                    }
                                />
                                <Errors className="text-danger my-2"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required field. ",
                                            isValidEmail: "Please enter a valid email"
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group my-2">
                            <Col md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox
                                            model=".agree"
                                            className="form-check-input"
                                            name="agree"
                                        />{" "}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Control.select
                                    model=".contactType"
                                    className="form-control"
                                    name="contactType"
                                >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>
                                Your Feedback
                            </Label>
                            <Col md={10}>
                                <Control.textarea
                                    model=".message"
                                    id="message"
                                    name="message"
                                    rows="12"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            minLength: minLength(10)
                                        }
                                    }
                                ></Control.textarea>
                                <Errors className="text-danger my-2"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required Field. ',
                                            minLength: "Should be greater than 10 characters"
                                        }}/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-2">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
