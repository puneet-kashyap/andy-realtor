import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

const MortgageComparison = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Mortgage Comparison</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'margin':'20px 0px'}}>
              <div className="widget" data-widget="mtg-table" data-purchase="true" data-lang="en"></div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    );
}
export default MortgageComparison;
