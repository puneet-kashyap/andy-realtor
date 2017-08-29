import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Contact = () => {
    return (
    <div>
    <Navbar/>
    <section id="contact" className="success">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>Contact Us.</h1>
                    <hr className="star-primary"></hr>
                        <div className="col-lg-6">
                            <h3>Andy Nagpal</h3>
                            <img src={require('../Images/contact/Andy_mirror_pix.png')} className="img-responsive center-block" alt="Simar Dhaliwal"/>
                            <p><span>
                                <br/>180 Northfield Dr. W #4
                                <br/>Waterloo, ON N2L 0C7
                                <br/>Ph.# 647-818-7966
                                <br/>Email:
                                <a href={`mailto:andypaaji@gmail.com?Subject=Andy%20Nagpal`} target="_top">andypaaji@gmail.com</a>
                                <br/>
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h3>Varun Tara</h3>
                            <img src={require('../Images/contact/Andy_profile_pix.png')} className="img-responsive center-block" alt="Sonia Bhardwaj"/>
                            <p><span>
                                <br/>Malton Gurughar
                                <br/>Mississauga
                                <br/>Ph.# 647-XXX-XXXX
                                <br/>Email:
                                <a href={`mailto:varunpaaji@gmail.com?Subject=Varun%20Paaji`} target="_top"> varunpaaji@gmail.com</a>
                                <br/>
                                </span>
                            </p>
                        </div>
                </div>
            </div>
                <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Let&apos;s Chat.</h2>
                    <hr className="star-primary"></hr>
                    <iframe title='chat-bot' width="100%" height="500" src="https://console.api.ai/api-client/demo/embedded/3b9af493-8128-477e-b731-676baddb3ffb"></iframe>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </div>
);

}

export default Contact;
