import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Frontpage from './Frontpage';
import Services from './Services';
import Info from './Info';
import Contact from './Contact';

//Run
class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Route exact path='/' component={Frontpage} />
		  <Route exact path='/palvelut' component={Services} />
          <Route exact path='/tietoa' component={Info} />
		  <Route exact path='/yhteystiedot' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
