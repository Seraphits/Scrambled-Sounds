// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/05-pages/Home/HomePage.Component';
import QuTypesPage from './Components/06-routes/QuTypesRoutes.jsx';
// import './App.css';

function App() {
  return (
    <div>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/qutypes' component={QuTypesPage} />
      </Switch>
    </div>
  )
}


export default App;
// QuTypesPage
// TablaLearnPage
