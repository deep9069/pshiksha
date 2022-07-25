import React from 'react'
import './Dochat.css'
import Userprofile from "../components/assets/userprofile.png"
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";

const Dochat = () => {

    return (
        <>

            <div class="container" style={{ margin: "100px" }} >



                <div class="messaging">
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <h3 >Chat Room</h3>
                    </div>
                    <div class="inbox_msg">

                        <div class="mesgs">
                            <div class="msg_history">
                                <div class="incoming_msg">
                                    <div class="incoming_msg_img"> <img src={Userprofile} /> </div>
                                    <div class="received_msg">
                                        <div class="received_withd_msg">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                    </div>
                                </div>
                                <div className="outgoing_msg">
                                    <div class="sent_msg">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                                </div>
                                <div class="incoming_msg">
                                    <div class="incoming_msg_img"> <img src={Userprofile} /> </div>
                                    <div class="received_msg">
                                        <div class="received_withd_msg">
                                            <p>Test, which is a new approach to have</p>
                                            <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                                    </div>
                                </div>
                                <div class="outgoing_msg">
                                    <div class="sent_msg">
                                        <p>Apollo University, Delhi, India Test</p>
                                        <span class="time_date"> 11:01 AM    |    Today</span> </div>
                                </div>
                                <div class="incoming_msg">
                                    <div class="incoming_msg_img"> <img src={Userprofile} /> </div>
                                    <div class="received_msg">
                                        <div class="received_withd_msg">
                                            <p>We work directly with our designers and suppliers,
                                                and sell direct to you, which means quality, exclusive
                                                products, at a price anyone can afford.</p>
                                            <span class="time_date"> 11:01 AM    |    Today</span></div>
                                    </div>
                                </div>
                                <hr class="line"/>
                                <div style={{ display: "flex", justifyContent:"space-around", margin: "10px" }}>
                                

                                    <div style={{ width: "70%", display: "flex" }}>
                                        <BsEmojiSmile style={{ marginRight: "5px" }} />
                                        <GrAttachment />
                                        <input style={{ width: "100%" }} placeholder='Type message..'></input>
                                    </div>
                                    <div style={{ width: "30%", float: "right" }}>
                                        <IoMdSend style={{ marginLeft: "10px" }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};
export default Dochat