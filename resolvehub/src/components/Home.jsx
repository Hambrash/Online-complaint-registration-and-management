import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navigation } from './Navigation'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/Image1.png'
import Image1 from '../assets/Image2.png'
import Image2 from '../assets/Image3.png'

import { RegisterComplaint } from './RegisterComplaint';




export const Home = () => {
  return (
    <>
    <Navigation/>
    <br /><br />
    <Container className='text-center'>
        <h3 className='text-center home-h3'>ResolveHub - Complaint Management System</h3> <br /><br />
        <p className="lead">The world's most effective solution for managing customer complaints effectively, An agile and scalable online complaint management system. Manage customer complaints gently with a high-tech Complaint Management System.</p>
        <RegisterComplaint/>


    </Container><br /><br />
    <Container className='text-center'>
        <Row>
            <Col lg="6">
                <img src={Image} alt="" className='img-fluid' />
            </Col>
            <Col lg="6"><br /><br />
                <h3 className='home-h3-2'>What is ResolveHub?</h3>
                <p className='home-p'>A ResolveHub is a web-based application that allows users to file, track, and resolve complaints online. It is commonly used by organizations, institutions, and government bodies to streamline the process of handling complaints, ensuring efficient and organized management of issues and concerns.</p>
            </Col>
        </Row>
    </Container><br />
    <Container className='text-center'>
        <Row>
            <Col lg="6"><br /><br />
                <h3 className='home-h3-2'>What are the uses of ResolveHub?</h3>
                <p className='home-p'>An ResolveHub improves customer satisfaction by offering a streamlined platform for submitting and tracking complaints. <br /><br />Overall, it enhances efficiency, saves time and resources, and strengthens customer relationships, making it an essential tool for businesses focused on quality service.</p>
            </Col>
            <Col lg="6"><br /><br />
                <img src={Image1} alt="" className='img-fluid' />
            </Col>
        </Row>
    </Container><br />
    <Container className='text-center'>
        <Row>
            <Col lg="6">
                <img src={Image2} alt="" className='img-fluid home-img' />
            </Col>
            <Col lg="6"><br /><br />
                <h3 className='home-h3-2'>Advantages of our ResolveHub</h3>
                <p className='home-p'>1. ResolveHub provides a simple, user-friendly interface for customers to submit complaints and track their status, making the process hassle-free and transparent. <br /><br />2. By automating the organization, prioritization, and assignment of complaints, ResolveHub enables quicker and more effective resolutions. <br /><br />3. The system reduces the need for manual intervention, minimizing administrative costs and freeing up resources for other critical tasks. <br /></p>
            </Col>
        </Row>
    </Container><br />

    <Container className='text-center'>
    <RegisterComplaint/>
    </Container><br />
    
    <Container className='text-center'>
        
            <p className='home-bg'> &#169; Copyrights by ResolveHub</p>
        
    </Container>



    
    
    
    </>
  )
}
