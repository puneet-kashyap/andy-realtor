import React,  { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import {updateInquiryForm} from '../../actions';
import Navbar from '../navbar';
import Footer from '../footer';
import {store} from '../../index'
import Header from '../Utils/header'
import { writeInquiryData } from '../../fire'

const InquiryThanks = (props) => {
  const { show, name, phone, email, realtor,date, time} = props
  writeInquiryData(name, phone, email, realtor, date, time);
  if (show === 'formSubmitted') {
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
                  <b>Name: </b>{name}<br/>
                  <b>Phone: </b>{phone}<br/>
                  <b>Email: </b>{email}<br/>
                  <b>Realtor: </b>{realtor}<br/>
                  <b>Date: </b>{date}<br/>
                  <b>Time: </b>{time}<br/>
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
      form: true,
      name:'',
      phone:'',
      email:'',
      realtor:'',
      date:'',
      time:''
    };
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  handleChange = name => event => {
    const field = name.charAt(0).toUpperCase() + name.slice(1);
    this.setState({
      [name]: event.target.value,
    });
    let error = (event.target.value !== '' ? '' : `${field} is Required`)
    this.setState({[name+'Error']: error});
  };
  handleRealtorChange = (event, index, realtor) => {
    this.setState({realtor})
    this.setState({realtorError: ''});
  }
  handleTimeChange = (event, index, time) => {
    this.setState({time});
    this.setState({timeError: ''});
  }
  handleDateChange = (event, date) => {
    this.setState({date: date.toString().substring(0,15)});
    this.setState({dateError: ''});
  }
  errors = {}
  validateForm = (values) => {
    let result = true;
    if (!values.name){
      let error = !values.name ? 'Name is Required' : values.name === '4' ? 'Format issue': 'nothing'
      this.setState({nameError:error})
      result = false;
    }
    if (!values.phone) {
      this.setState({phoneError:'Phone No. is Required'})
      result = false;
    }
    if (!values.email) {
      this.setState({emailError:'Email is Required'})
      result = false;
    }
    if (!values.realtor) {
      this.setState({realtorError:'Realtor is Required'})
      result = false;
    }
    if (!values.date) {
      this.setState({dateError:'Date is Required'})
      result = false;
    }
    if (!values.time) {
      this.setState({timeError:'Time is Required'})
      result = false;
    }
    return result;
  }
   submitForm ()  {
     if (this.validateForm(this.state)){
       updateInquiryForm(this.state)
       this.setState({form:null})
     }
  }
  render() {
    if (this.state.form === true){
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="container">
            <Header header="Inquiry"/>
            <div className="row col-md-offset-4 col-md-4" >
              <Paper style={{'padding':'25px'}}>
              <p className="text-left">
                Please enter your information to get professional consulting.
              </p>
              <TextField
                hintText="First and Last Name"
                floatingLabelText="Your Name"
                onBlur={this.handleChange('name')}
                errorText={this.state.nameError}
                onChange={this.handleChange('name')}
              /><br />
              <TextField
                hintText="+1-xxx-xxx-xxxx"
                floatingLabelText="Phone Number"
                onBlur={this.handleChange('phone')}
                errorText={this.state.phoneError}
                onChange={this.handleChange('phone')}
              /><br />
              <TextField
                hintText="Your email address"
                floatingLabelText="Email"
                onBlur={this.handleChange('email')}
                errorText={this.state.emailError}
                onChange={this.handleChange('email')}
              /><br />
              <SelectField
                className="text-left"
                floatingLabelText="Working with a Realtor ?"
                errorText={this.state.realtorError}
                onBlur={this.handleChange('realtor')}
                value={this.state.realtor}
                onChange={this.handleRealtorChange}
              >
                <MenuItem value={'No'} primaryText="No" />
                <MenuItem value={'Yes'} primaryText="Yes" />
              </SelectField>
              <DatePicker className="text-left" id="date" ref="date" errorText={this.state.dateError}
                floatingLabelText="Available Date" hintText="Date to Call" onChange={this.handleDateChange} onBlur={this.handleChange('date')}/>
              <SelectField id="time" className="text-left" floatingLabelText="Available Time"  errorText={this.state.timeError} value={this.state.time} onBlur={this.handleChange('time')} onChange={this.handleTimeChange}>
                <MenuItem value={'Morning'} label="5 am - 12 pm" primaryText="Morning" />
                <MenuItem value={'Afternoon'} label="12 pm - 5 pm" primaryText="Afternoon" />
                <MenuItem value={'Evening'} label="5 pm - 9 pm" primaryText="Evening" />
                <MenuItem value={'Night'} label="9 pm - 5 am" primaryText="Night" />
              </SelectField><br/>
              <RaisedButton style={{'marginTop':'25px'}} type="submit" label="Submit" primary={true} onClick={this.submitForm}/>
              </Paper>
          </div>
          </div>
        </section>
        <Footer />
        </div>
    );
  } else {
    const formData = store.getState().inquiry;
    return (
        <InquiryThanks show='formSubmitted' {...formData} />
    )
  }
  }
}
