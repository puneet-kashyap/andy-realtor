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
      <Route exact path='/Contact' component={Contact}/>
      <Route path="*" render={() => (<Redirect to="/"/>)} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
