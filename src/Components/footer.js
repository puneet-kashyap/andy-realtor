import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Andy Nagapl</h3>
                            <p><span>Ph.# 647-818-7966<br/>
                                <a href={`mailto:andypaaji@gmail.com?Subject=Andy%20Nagpal`} target="_top">andypaaji@gmail.com</a></span>
                                <span className='hidden-xs'>
                                <br/>180 Northfield Dr. W #4
                                <br/>Waterloo, ON N2L 0C7<br/>
                            </span></p>
                        </div>
                        <div className="footer-col col-md-4">
                          <div className="hidden-xs">
                            <h3>Around the Web</h3>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/TeamAndyNagpal/" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/+AndyNagpal" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-google-plus"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Andynagpal" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/andynagpal/" target="_blank" rel="noopener noreferrer" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                                </li>
                            </ul>
                            </div>
                            <div className="fb-like" data-href="https://www.facebook.com/TeamAndyNagpal/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Varun Tara</h3>
                            <p><span>Ph.# 647-XXX-XXXX<br/>
                                <a href={`mailto:varunpaaji@gmail.com?Subject=Varun%20Paaji`} target="_top"> varunpaaji@gmail.com</a></span>
                                <span className='hidden-xs'>
                                <br/>Malton Gurughar
                                <br/>Mississauga<br/>
                            </span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                          Copyright &copy; Andy Insurance Canada {new Date().getFullYear()}<br/>
                          Built with 💖 by the <u><a style={{'color':'white'}} href={`mailto:kashyap@radhasoami.ca`}>Kashyap</a></u> team
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
