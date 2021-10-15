import React from 'react'

import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row,ProgressBar, DropdownButton,Dropdown } from 'react-bootstrap';

const Service = () => {
    return (
        <div className='container'>
            <Row>
                <h1 className='sh1'>What <span>I Do</span></h1>
                <Col className='col3'>
                    <h1 className='head'>Website Design & Development</h1>
                    <p className='sp'><span className='spa1'> Digital</span> presence is how your business appears online. Your web presence is made up of several different components and can be summed up as the impression your brand makes online through content, websites, search engines and other digital media and <span className='spa2'>platforms.</span></p>
                    <br />
                    <h1 className='head'>E-Commerce Store</h1>
                    <p className='sp'><span className='spa1'> When</span>  deciding where to sell products online, many merchants choose between selling on a marketplace and creating their own website. While each option has its own set of pros and cons – and there is no one-size-fits-all solution that works perfectly for everyone – we believe businesses that are truly serious about ecommerce should have their own <span className='spa2'>website.</span></p>
                </Col>
                <Col className='col4'>
                <h1 className='head'>Graphics Design & 3D Modals</h1>
                    <p className='sp'><span className='spa1'>The main</span> purpose of Graphic design is to communicate. Primarily graphic design is visual communication; it uses typography, images and colours to represent certain ideas or messages.

It blends photography, illustration, motion graphics together to create appealing designs which can capture the attention of the viewers, convert them into sales and opens new avenues of <span className='spa2'>business.</span></p>
                    <br />
                    <h1 className='head'>Photography</h1>
                    <p className='sp'><span className='spa1'>Some</span> Of Our Team Members Are Really Great Experienced Photographers. Wedding / Product / Model / Events <span className='spa2'>Shoots.</span></p>
                </Col>
            </Row>
        </div>
    )
}

export default Service;
