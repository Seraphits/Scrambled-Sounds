// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/05-pages/Home/HomePage.Component';
// import './App.css';

function App() {
  return (
    <div>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
      </Switch>
    </div>
  )
}


export default App;
// QuTypesPage
// TablaLearnPage
