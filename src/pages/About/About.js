import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row,ProgressBar, DropdownButton,Dropdown } from 'react-bootstrap';


const About = () => {
    return (
        <div className='container'>
           <Row>
               <Col className='col1'>
                   <h1 className='ah1'>About <span>Me</span></h1>
                   <p className='ap1'>I am a <span>Web</span> Designer Dedicated to Professional services. Quality Web Design and Development, and <span>Trustworthy</span> Result. I Create Highly Functional User Interfaces with a Perfect Mixture of <span>Simplicity</span>, and <span>Innovation</span> for each of My Clients.</p>
               </Col>
               <Col className='col2'>
               <p><span>Age </span>19</p>
               <p><span>Residence</span> India</p>
               <p><span>Address </span>Green View Apt. Vasai E</p>
               <p><span>E-mail </span> ritikparte01@gmail.com</p>
               <p><span>Phone </span>+91 9307996477</p>
               </Col>
           </Row>
        </div>
    )
}

export default About;
