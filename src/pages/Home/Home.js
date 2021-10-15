import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from 'J:/React New/main/src/img/1.png'
import img2 from 'J:/React New/main/src/img/2.png'
import img3 from 'J:/React New/main/src/img/3.png'
import boy1 from 'J:/React New/main/src/img/boy1.png'
import './Home.css'
import { Button, Col, Row,ProgressBar, DropdownButton,Dropdown } from 'react-bootstrap';







const Home = () => {

  
    return (
        <div className='container fluid'>
            
            <Row>
              <Col>
              <h1 className='maint-1'>Hi. I'am <span>RITIK</span></h1>
              <h3 className='maint-2'><span>Frontend </span>Developer</h3>
              <p className='p1'>Welcome, I am a Web Designer Dedicated to Professional services.</p>
              <Button className='primary' href='/contact'>Contact Me</Button>
              </Col>

              <svg className='svg1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8A3FFC" d="M60.3,-31.9C74.7,-9.9,80.5,19.9,69,40.5C57.5,61.1,28.8,72.3,0.4,72.1C-28,71.9,-56.1,60.3,-67.4,39.8C-78.6,19.4,-73.1,-9.8,-59.1,-31.6C-45.1,-53.5,-22.6,-67.8,0.2,-68C23,-68.1,45.9,-53.9,60.3,-31.9Z" transform="translate(100 100)" />
              </svg>
              <img className='boy1' src={boy1} />
              <Col>
              
              </Col>
              {/* <ProgressBar animated now={45} /> */}
            </Row>

            {/* <div className='prog'>
              <h1 className='sh1'>Skills</h1>
              <h4 className='sh2'>My Technical Skills</h4>
            <DropdownButton align="end" title="Frontend" id="dropdown-menu-align-end">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            </div> */}




        </div>
    )
}

export default Home;
