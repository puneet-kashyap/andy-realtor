import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import {Slider, Recommendation} from './Utils/slider';
import Map from './Utils/map'
import Youtube from './Utils/youtube'

const Home = () => {
    return (
        <div>
          <Navbar />
            <section className="success" id="header">
                <div className="container">
                    <Slider />
                    <div className="row" style={{'margin':'25px 0px'}}>
                        <div className="col-md-6" style={{'padding':'10px'}}>
                          <a href="/">
                            <img src={require('../Images/home/FreeHomeEvaluation.gif')}
                            className="img-responsive" alt="Andy Nagpal Realtor"/>
                          </a>
                        </div>
                        <div className="col-md-6" style={{'padding':'10px'}}>
                          <a href="/">
                            <img src={require('../Images/home/FindYourDreamHome.gif')}
                            className="img-responsive" alt="Andy Nagpal Realtor"/>
                          </a>
                        </div>
                    </div>
                    <Recommendation />
                    <div>
                      <div className="row">
                          <div className="col-lg-12 text-center" style={{'marginTop':'25px'}}>
                              <h1>Our Locations</h1>
                              <hr className="star-primary"></hr>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-4" >
                            <Map loc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.237774208143!2d-80.54941998450728!3d43.49737507912697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf1611ecc0a5d%3A0x42d317d2d6c43376!2s180+Northfield+Dr+W%2C+Waterloo%2C+ON+N2L+0C7!5e0!3m2!1sen!2sca!4v1506445371823"/>
                          </div>
                          <div className="col-lg-4">
                            <Map loc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.558456465879!2d-79.64128038473791!3d43.59491257912335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b472f8715e98d%3A0xd469bfaac9cd7479!2s33+City+Centre+Dr%2C+Mississauga%2C+ON+L5B+2N5%2C+Canada!5e0!3m2!1sen!2sca!4v1506454553121"/>
                          </div>
                          <div className="col-lg-4">
                            <Map loc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.51572131157!2d-79.35364808449873!3d43.76215237911761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d290d7487db1%3A0x2f5988e4d13e94a8!2s240+Duncan+Mill+Rd%2C+North+York%2C+ON+M3B+3S6!5e0!3m2!1sen!2sca!4v1506454436261"/>
                          </div>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center" style={{'marginTop':'50px'}}>
                            <h1>Useful Videos</h1>
                            <hr className="star-primary"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center" style={{'padding':'10px'}}>
                          <Youtube src="https://www.youtube.com/embed/sKxkfwdZaA4"/>
                        </div>
                        <div className="col-md-4 text-center" style={{'padding':'10px'}}>
                          <Youtube src="https://www.youtube.com/embed/pUZTfAK43os"/>
                        </div>
                        <div className="col-md-4 text-center" style={{'padding':'10px'}}>
                          <Youtube src="https://www.youtube.com/embed/IUNsndIL1bg"/>
                        </div>
                    </div>
                </div>

            </section>
          <Footer />
        </div>
    );
}

export default Home;
