import React,  { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import Navbar from '../navbar';
import Footer from '../footer';

const InquiryThanks = (props) => {
  if (props.show === 'login') {
    return (
      <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <h1>Thank You.</h1>
            <p>Andy Nagpal will contact you shortly.</p>
            <div className="row col-md-offset-4 col-md-4" >
              <Paper style={{'padding':'10px'}}>
                <h3 className="text-center" style={{'paddingBottom':'5px'}}>
                  <b><u>Your Details:</u></b>
                </h3>
                <p>
                  <b>Name: </b>{props.name}<br/>
                  <b>Phone: </b>{props.phone}<br/>
                  <b>Email: </b>{props.email}<br/>
                  <b>Realtor: </b>{props.realtor}<br/>
                  <b>Date: </b>{props.date}<br/>
                  <b>Time: </b>{props.time}<br/>
                </p>
              </Paper>
            </div>
        </div>
      </section>
      <Footer />
      </div>
    )
  }
}

export default class Inquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'show',
    };
    this.submitForm = this.submitForm.bind(this);
  }

  handleRealtorChange = (event, index, realtor) => {
    this.setState({realtor})
  }
  handleTimeChange = (event, index, time) => this.setState({time})
  handleNameChange = () => this.setState({name:this.refs.name.getValue()})
  handlePhoneChange = () => this.setState({phone:this.refs.phone.getValue()})
  handleEmailChange = () => this.setState({email:this.refs.email.getValue()})
  handleDateChange = (event, date) => this.setState({date: date.toString()})

   submitForm ()  {
     console.log(this.state);
     this.setState({form:null})
  }
  render() {
    if (this.state.form === 'show'){
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                    <h1>Inquiry</h1>
                    <hr className="star-primary"></hr>
                </div>
            </div>
            <div className="row col-md-offset-4 col-md-4" >
              <Paper style={{'padding':'25px'}}>
              <p className="text-left">
                Please enter your information to get professional consulting.
              </p>
              <TextField
                ref="name"
                hintText="First and Last Name"
                floatingLabelText="Your Name"
                onChange={this.handleNameChange}
              /><br />
              <TextField
                ref='phone'
                hintText="+1-xxx-xxx-xxxx"
                floatingLabelText="Phone Number"
                onChange={this.handlePhoneChange}
              /><br />
              <TextField
                ref='email'
                hintText="Your email address"
                floatingLabelText="Email"
                onChange={this.handleEmailChange}
              /><br />
              <SelectField
                id="realtor"
                className="text-left"
                floatingLabelText="Working with a Realtor ?"
                value={this.state.realtor}
                onChange={this.handleRealtorChange}
              >
                <MenuItem value={'No'} primaryText="No" />
                <MenuItem value={'Yes'} primaryText="Yes" />
              </SelectField>
              <DatePicker className="text-left" id="date" ref="date"
                floatingLabelText="Available Date" hintText="Date to Call" onChange={this.handleDateChange}/>
              <SelectField id="time" className="text-left" floatingLabelText="Available Time" value={this.state.time} onChange={this.handleTimeChange}>
                <MenuItem value={'Morning'} label="5 am - 12 pm" primaryText="Morning" />
                <MenuItem value={'Afternoon'} label="12 pm - 5 pm" primaryText="Afternoon" />
                <MenuItem value={'Evening'} label="5 pm - 9 pm" primaryText="Evening" />
                <MenuItem value={'Night'} label="9 pm - 5 am" primaryText="Night" />
              </SelectField>
              <RaisedButton style={{'marginTop':'25px'}} type="submit" label="Submit" primary={true} onClick={this.submitForm}/>
              </Paper>
          </div>
          </div>
        </section>
        <Footer />
        </div>
    );
  } else {
    const shortDate = this.state.date.substring(0,15)
    return (
      <div>
        <InquiryThanks
          show='login'
          name = {this.state.name}
          phone = {this.state.phone}
          email = {this.state.email}
          realtor = {this.state.realtor}
          date = {shortDate}
          time = {this.state.time}
        />
      </div>

    )
  }
  }
}
