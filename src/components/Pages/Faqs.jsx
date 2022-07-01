import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faqs=()=> {
    return (
        <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Why Choose Shiksha 4.0?</Accordion.Header>
                <Accordion.Body>
                    Immigrating to a different country is a life time opportunity. Completing the applications and figuring out what supporting documents are required is a cumbersome process. It can become very difficult given to the constantly changing rules and regulations. Though approval or denial of a visa is in the hands of a visa officer, but it is imperative that your case to them is presented in a proper manner. We will help you step by step in preparing the paperwork and how to deal with the requests and correspondences from the government. There are different pathways to immigrate to different countries, explore your options today by contacting us.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>When obtaining visa and travel documents, What SoA clients receive? </Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <p>Unmatched speed &ndash; receiving travel visas or passports sometimes in as little as one day.</p>
                        </li>
                        <li>
                            <p>Full line of services in over&nbsp;100 countries.</p>
                        </li>
                        <li>
                            <p>State-of-the-art technology for fast and convenient access to data, requirements and forms to obtain travel&nbsp;visas&nbsp;or&nbsp;passports.</p>
                        </li>
                        <li>
                            <p>Specialist support from our travel visa and passport specialists.</p>
                        </li>
                        <li>
                            <p>Secure processing of private information through our proprietary technology system.</p>
                        </li>
                        <li>
                            <p>Real-time tracking of application status.</p>
                        </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Will my data be shared to any third party?</Accordion.Header>
                <Accordion.Body>
                    We are fully committed to protecting the data you trust us with.

                    We adhere to the most stringent requirements in information security as part of a comprehensive program to monitor and safeguard all sensitive data. The three pillars of our commitment to data security and global compliance are our people, our systems, and our processes.


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
};
export default Faqs;
