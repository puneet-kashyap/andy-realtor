import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div>
            <nav id="mainNav" className="subNav navbar navbar-default navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <div className="navbar-header visible-xs">
                        <a href="/">
                          <img src={require('./../Images/andy.png')} className="img-responsive logo-img img-rounded" alt="Radha Soami logo" />
                        </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li >
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/TermInsurance'>Term Insurance</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/universal-life-insurance'>Universal Life Insurance</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/critical-illness-insurance'>Critical Insurance</Link>
                            </li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                                Insurance
                              <span className="caret"></span></a>
                              <ul className="dropdown-menu" style={{'background':'#00458b'}}>
                                <li className="page-scroll">
                                    <Link to='/LifeInsurance'>Life Insurance</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/TermInsurance'>Term Life Insurance</Link>
                                </li>
                                <li >
                                    <Link to='/whole-life-insurance'>Whole Life Insurance</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/universal-life-insurance'>Universal Life Insurance</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/critical-illness-insurance'>Critical Illness Insurance</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="page-scroll">
                                <Link to='/Contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default SubNav;
