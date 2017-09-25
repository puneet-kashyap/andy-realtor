import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { fireUI } from '../../fire'

const SignIn = () => {
  fireUI()
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Login</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row" style={{'marginBottom':'70px'}}>
              <div id="firebaseui-auth-container"></div>
            </div>
          </div>
        </section>
        <Footer />
        </div>
    );
}
export default SignIn;
