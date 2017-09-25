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
                            <li className="dropdown">
                              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                                Mortgage Hub
                              <span className="caret"></span></a>
                              <ul className="dropdown-menu" style={{'background':'#00458b'}}>
                                <li className="page-scroll">
                                    <a href="http://www.andynagpal.info" target="_blank" rel="noopener noreferrer">Mortgage Agent</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="https://apply.invismi.ca/?wid=41001603" target="_blank" rel="noopener noreferrer">Mortgage Application</a>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/Mortgage-Process'>Getting a Mortgage</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/Mortgage-Rate-Charts'>Mortgage Rate Charts</Link>
                                </li>
                                <li className="page-scroll">
                                    <a href="http://www.consumer.equifax.ca/home/en_ca" target="_blank" rel="noopener noreferrer">Credit History</a>
                                </li>
                              </ul>
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
                                <li className="page-scroll">
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

                            <li className="dropdown">
                              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                                Calculator
                              <span className="caret"></span></a>
                              <ul className="dropdown-menu" style={{'background':'#00458b'}}>
                                <li className="page-scroll">
                                    <Link to='/Mortgage-Calculator'>Mortgage Calculator</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/Mortgage-Comparison'>Mortgage Comparison</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/CMHC-Insurance-Calculator'>CMHC Insurance Calculator</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/Land-Transfer-Tax-Calculator'>Land Transfer Tax Calculator</Link>
                                </li>
                                <li className="page-scroll">
                                    <Link to='/Mortgage-Affordability-Calculator'>Mortgage Affordability Calculator</Link>
                                </li>
                              </ul>
                            </li>

                            <li className="page-scroll">
                                <a href="http://www.kwhomesearch.info/property_find_results?country=203&amp;CountyID=&amp;city=waterloo&amp;zip_postal=&amp;ml_num=&amp;price_from=175000&amp;price_to=2100000&amp;residentialType=Detached&amp;sale=on&amp;bedrooms_from=0&amp;bathrooms_from=0&amp;bedrooms_to=NULL&amp;bathrooms_to=NULL&amp;" target="_blank" rel="noopener noreferrer">KW Homes</a>
                            </li>
                            <li className="page-scroll">
                                <a href="http://topbiz4sale.info/" target="_blank" rel="noopener noreferrer">Business For Sale</a>
                            </li>
                            <li className="page-scroll">
                                <Link to='/Contact'>Contact Us</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/SignIn'><span id='sign-in-status' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default SubNav;
