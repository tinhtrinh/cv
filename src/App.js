import React, {Component} from 'react';
import {IntlProvider} from "react-intl";
import './App.css';
import Contact from './components/contact/redux/index';

class App extends Component {

  render() {
    return (
      <IntlProvider 
        locale='en'
        messages={{
          'Contacts': 'Contacts', 'Add Contact': 'Add Contact', 'Name': 'Name', 'Email': 'Email',
          'Student ID': 'Student ID', 'Specialized': 'Specialized' ,'Phone': 'Phone','Address': 'Address',
          'Designation': 'Designation', 'Save Contact': 'Save Contact'
        }}>
        <div className="App">
          <Contact />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
