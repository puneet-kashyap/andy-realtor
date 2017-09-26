import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import './index.css';
import App from './App';
import Contact from './Components/Contact';
import LifeInsurance from './Components/Insurance/LifeInsurance';
import TermInsurance from './Components/Insurance/TermInsurance';
import UniversalLifeInsurance from './Components/Insurance/UniversalLifeInsurance';
import CriticalIllnessInsurance from './Components/Insurance/CriticalIllnessInsurance';
import WholeLifeInsurance from './Components/Insurance/WholeLifeInsurance';
import MortgageAffordabilityCalculator from './Components/Calculator/MortgageAffordabilityCalculator';
import CMHCinsuranceCalculator from './Components/Calculator/CMHCinsuranceCalculator';
import LandTransferTaxCalculator from './Components/Calculator/LandTransferTaxCalculator';
import MortgageCalculator from './Components/Calculator/MortgageCalculator';
import MortgageComparison from './Components/Calculator/MortgageComparison';
import MortgageProcess from './Components/Mortgage/MortgageProcess';
import MortgageRateCharts from './Components/Mortgage/MortgageRateCharts';
import Welcome from './Components/Login/Welcome';
import SignIn from './Components/Login/SignIn';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter forceRefresh={true}>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/LifeInsurance' component={LifeInsurance}/>
      <Route exact path='/TermInsurance' component={TermInsurance}/>
      <Route exact path='/universal-life-insurance' component={UniversalLifeInsurance}/>
      <Route exact path='/critical-illness-insurance' component={CriticalIllnessInsurance}/>
      <Route exact path='/whole-life-insurance' component={WholeLifeInsurance}/>
      <Route exact path='/Mortgage-Affordability-Calculator' component={MortgageAffordabilityCalculator}/>
      <Route exact path='/CMHC-Insurance-Calculator' component={CMHCinsuranceCalculator}/>
      <Route exact path='/Land-Transfer-Tax-Calculator' component={LandTransferTaxCalculator}/>
      <Route exact path='/Mortgage-Calculator' component={MortgageCalculator}/>
      <Route exact path='/Mortgage-Process' component={MortgageProcess}/>
      <Route exact path='/Mortgage-Comparison' component={MortgageComparison}/>
      <Route exact path='/Mortgage-Rate-Charts' component={MortgageRateCharts}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/SignIn' component={SignIn}/>
      <Route exact path='/Welcome' component={Welcome}/>
      <Route path="*" render={() => (<Redirect to="/"/>)} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
