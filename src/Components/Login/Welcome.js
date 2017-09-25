import React from 'react';

import Navbar from '../navbar';
import Footer from '../footer';
import { signOut, signIn, fireLocal } from '../../fire';

const UserInfo = () => {
  const user = fireLocal()
  if(user){
    return (
      <div>
        <div className="row" style={{'margin':'20px 0px'}}>
            <div className="col-lg-6">
              <h3>Welcome, {user.displayName} !!!</h3>
              <p><b><u>Your Account Details:</u></b></p>
              <p><b>Email Id:</b> {user.email}</p>
              <p><b>Phone No.:</b> {user.phoneNumber}</p>
              <p><b>Signed In with:</b> {user.providerData[0].providerId.toUpperCase()}</p>
              <button type="button" className="btn btn-danger" onClick={signOut}>
                Sign Out
              </button>
            </div>
            <div className="col-lg-6">
              <img src={user.photoURL} alt='' className="img-responsive"/>
            </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="row" style={{'margin':'20px 0px'}}>
          <div className="col-lg-6">
            <h3>Please Sign In.</h3>
            <button type="button" className="btn btn-primary"  onClick={signIn}>
              Sign In
            </button>
          </div>
      </div>
    )
  }
}

const Welcome = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Welcome</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <UserInfo />
          </div>
        </section>
        <Footer />
        </div>
    );
}

export default Welcome;
