import React from 'react'

import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row,ProgressBar, DropdownButton,Dropdown, Form } from 'react-bootstrap';
const Contact = () => {
    return (
        <div className='container'>
            <Row>
                <h1>Contact <span>Me</span></h1>
                <Col className='col5'>
                    <p><span>Phone </span>+91 9307996477</p>
                    <p><span>Email </span>ritikparte01@gmail.com</p>
                    <p><span>Address </span>Green View Apt. Samarth Ramdas Nagar Vasai East.</p>
                </Col>
                <Col className='col6'>
                        <Form>
                            <h3>Enter Your <span>Details</span></h3>
                            <lable>Name</lable><br/>
                            <input type="text" placeholder="Alex Seth" /><br/>
                            <lable>Phone No.</lable><br/>
                            <input type="number" placeholder="+91 987654321" /><br/>
                            <lable>Email</lable><br/>
                            <input type="text" placeholder="exapmle@gmail.com" /><br />
                            <Button className='send' type='submit'>Send</Button>
                        </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Contact;
