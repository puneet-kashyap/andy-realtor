import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const MortgageCalculator = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Mortgage Rate Charts</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
                <h2 className="text-center" style={{'margin':'25px 0px'}}>5 Years Fixed Mortgage Rates</h2>
                <div id="ratehub_chart_LKQW"/>
            </div>
            <div className="row" style={{'margin':'50px 0px'}}>
                <h2 className="text-center" style={{'margin':'25px 0px'}}>5 Years Variable Mortgage Rates</h2>
                <div id="ratehub_chart_NZ2E"/>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    );
}
export default MortgageCalculator;
