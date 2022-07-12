import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { NavLink } from "react-router-dom";
import { Col } from "react-grid-system";
import scam from "../assets/scammaster.webp";
import idfc from "../assets/idfc.webp";
import razorpay from "../assets/razorpay.webp";
import university from "../assets/dtunsutiiit.png";

export const Footer = () => {
return (
	<Box>
	<h4 style={{ color: "white",
				textAlign: "center",
				marginTop: "-75px" }}>
	Premi ji's Shiksha 4.0
	</h4>
	<Container>
		<Row>
		{/* <Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column> */}
		<Column>
		<Heading>Services</Heading>
		<NavLink exact to="./HomeTution" className="link" style={{textDecoration:"none",marginBottom:"10px"}}>
			  <FooterLink >Tutions</FooterLink>
			</NavLink>
			<NavLink exact to="./HomeTution" className="link" style={{textDecoration:"none",marginBottom:"10px"}}>
			  <FooterLink >Engineering</FooterLink>
			</NavLink>
			<NavLink exact to="./HomeTution" className="link" style={{textDecoration:"none",marginBottom:"10px"}}>
			  <FooterLink >Exam prep</FooterLink>
			</NavLink>
			<NavLink exact to="./Overseas" className="link"style={{textDecoration:"none",marginBottom:"10px"}}>
			  <FooterLink >Overseas</FooterLink>
			</NavLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/shiksha4.0">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/shiksha4.0/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://shiksha4-0.tumblr.com/">
			<i className="fab fa-tumblr">
				<span style={{ marginLeft: "10px" }}>
				Tumblr
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.reddit.com/user/FreeShiksha">
			<i className="fab fa-reddit">
				<span style={{ marginLeft: "10px" }}>
				Reddit
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
		<></>
			<Heading>Contact Us</Heading>
			<FooterLink href="https://goo.gl/maps/sKdJbVdrhc9fVh2g7"> <i className="fas fa-map-marked-alt"></i>&nbsp;&nbsp;G-7/189, Above Gianis Ice cream, Sector 16,Rohini, new Delhi-110089</FooterLink>
			<FooterLink >
			<i className="far fa-envelope-open">
				<span style={{ marginLeft: "10px" }}>
				pshiksha4.0@gmail.com
				</span>
			</i>
			</FooterLink>
			<FooterLink >
			<i className="fas fa-phone">
				<span style={{ marginLeft: "10px" }}>
				+91-9599139063 +91-9821693299
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
		<div style={{display:"flex"}}>
		Verified by: 
		<FooterLink >
			<img src={scam} style={{marginLeft:18,width:"150px"}}></img>
		</FooterLink>
		</div>
		<div style={{display:"flex",marginTop:"10px"}}>
		Official Payment Partner:
		<FooterLink >
			<img src={idfc} style={{marginLeft:12,width:"150px"}}></img>
		</FooterLink>
		</div>
		<div style={{display:"flex",marginTop:"10px"}}>
		Official Bank Partner:
		<FooterLink >
			<img src={razorpay} style={{marginLeft:18,width:"150px"}}></img>
		</FooterLink>
		</div>
		<div style={{display:"flex",marginTop:"10px"}}>
		Official Partner:
		<FooterLink >
			<img src={university} style={{marginLeft:18,width:"150px"}}></img>
		</FooterLink>
		</div>
		</Column>
		</Row>
	</Container>
	<div className="copyright">
	<p style={{ color: "white" ,textAlign:"center",fontSize:18}}>Copyright ©2022 All rights reserved</p>
	</div>
	</Box>
);
};
export default Footer;
