import React from 'react';
import { Button, Container, Card, Row, Col, Stack } from 'react-bootstrap'
import Faqs from './Faqs'
import Newc from './Newc'


const Overseas =()=> {
    return (
        <>
            <Container className='mt-5 mb-5'>
                <div data-testid="richTextElement">
                    <div className='d-flex align-items-center flex-column'>
                        <h1 style={{ fontSize: "50px" }}><b>Choose from the<span style={{ color: "#29e6a7" }}> Best Countries</span></b></h1>
                        <p className='mt-5 mb-5'>School of Abroad, a wholly owned subsidiary of P. Shiksha 4.0, is the global provider of immigration and visa services with the required reach, agility and client commitment to enable individuals to more easily navigate complex regulations so they can legally work, live and visit around the world.

                            We commit to delivering a superior service experience to our clients on each and every engagement.

                            With that commitment in mind, we have established six core values that define our corporate culture and service to our clients.</p>
                    </div>
                </div>
            </Container>
            <Container className='mt-5 mb-5'>
                <Newc />
            </Container>
            <Container className='mt-5 mb-5'>
            <div className='d-flex align-items-center flex-column'>
                        <h1 style={{ fontSize: "50px" }}><b>Frequently Asked Questions <span style={{ color: "#29e6a7" }}>(Faqs)</span></b></h1>
                        <p className='mt-5'>
                            Get All your queries answered here!
                        </p>
                    </div>
                    <div className='mt-5 mb-5'>
                    <Faqs/>
                    <div className='mt-5 mb-5'>
                    <hr></hr>
                    </div>
                    

                    </div>
            </Container>

        </>
    );
};
export default Overseas;