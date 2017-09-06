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
                            <img src={require('../Images/contact/Andy_mirror_pix.png')} className="img-responsive center-block" alt="Andy Nagpal"/>
                            <p><span>
                                <br/>180 Northfield Dr. W #4
                                <br/>Waterloo, ON N2L 0C7
                                <br/>Ph.# 647-818-7966
                                <br/>Email:
                                <a href={`mailto:andy.nagpal1@gmail.com?Subject=Andy%20Nagpal`} target="_top">andy.nagpal1@gmail.com</a>
                                <br/>
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h3>Varun Tara</h3>
                            <img src={require('../Images/contact/Andy_profile_pix.png')} className="img-responsive center-block" alt="Andy Nagpal"/>
                            <p><span>
                                <br/>Malton Gurughar
                                <br/>Mississauga
                                <br/>Ph.# 226-666-9558
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
              <div className="row text-center" style={{'margin':'50px 10px 10px 10px'}}>
                    <div className="fb-page visible-xs"
                      data-href="https://www.facebook.com/TeamAndyNagpal"
                      data-tabs="timeline,messages,events"
                      data-show-facepile="true">
                      <blockquote cite="https://www.facebook.com/TeamAndyNagpal" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/TeamAndyNagpal">Andy Nagpal Realty Team - Your Home Sold Guaranteed or I&#039;ll buy it.</a>
                      </blockquote>
                    </div>
              </div>
        </div>
    </section>
    <Footer />
    </div>
);

}

export default Contact;
