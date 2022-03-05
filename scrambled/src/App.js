// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/05-pages/Home/HomePage.Component';
import LanguagesPage from './Components/05-pages/LanguagesPage/LanguagesPage.Component';
import GamesPage from './Components/05-pages/GamesPage/GamesPage.Component';
import AboutPage from './Components/05-pages/AboutPage/AboutPage.Component';
import ContactPage from './Components/05-pages/ContactPage/ContactPage.Component';
import QuTypesPage from './Components/06-routes/QuTypesRoutes.jsx';
// import './App.css';

function App() {
  return (
    <div>
       <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/languages' component={LanguagesPage} />
        <Route exact path='/games' component={GamesPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/qutypes' component={QuTypesPage} />
      </Switch>
    </div>
  )
}


export default App;
// QuTypesPage
// TablaLearnPage
