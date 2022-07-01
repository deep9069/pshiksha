import React from 'react';
import './Assignment.scss'


const Assignment = () => {
	return (<>
    <section class="c-section">
    <h2 class="c-section__title" style={{"padding-top": "100px"}}><span>Assignment Making</span></h2>
    <ul class="c-services">
        <li class="c-services__item">
            <h3>Aptitude Basics</h3>
            <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
        </li>
        <li class="c-services__item">
            <h3>Soft Skills</h3>
            <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
        </li>
        <li class="c-services__item">
            <h3>Languages & Subjects</h3>
            <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we&rsquo;re happy to do so.</p>
        </li>
        <li class="c-services__item">
            <h3>Coding Prep</h3>
            <p>If you don&rsquo;t know what kind of service to request from us, don&rsquo;t worry. We can help and see what fits your business and your budget.</p>
        </li>
        <li class="c-services__item">
            <h3>Tech Skills Training</h3>
            <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
        </li>
        <li class="c-services__item">
            <h3>Mock Interviews</h3>
            <p>It&rsquo;s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more. </p>
        </li>
    </ul>
</section>
<div style={{"padding-bottom": "100px"}}></div>

    </>);
}

export default Assignment;
