import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import FamilyRegister from './components/registrationforms/FamilyRegister';

function App() {
  return (
    <div className="App">
      <Dashboard>
        <div className="content">
          <h1>Family Information Form</h1>
          {/* <FamilyForm /> */}
          <FamilyRegister />
        </div>
      </Dashboard>
    </div>
  );
}

export default App;
