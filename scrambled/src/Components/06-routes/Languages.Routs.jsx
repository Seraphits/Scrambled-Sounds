// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Languages from '../05-pages/LanguagesPage/LanguagesPage.Component';
import LanguagePage from '../05-pages/LanguagePage/LanguagePage.Component';
// import QuType1 from './Components/05-pages/Home/HomePage.Component';
// import './App.css';

function QuTypesRoutes() {
  return (
    <div>
        <Switch>
            <Route exact path='/languages/' component={Languages} />
            {/* <Route path='/languages/:languageID' render={routeProps => <LanguagePage name='YO-Yo' Stuff={routeProps} />} /> */}
            {/* <Route path='/languages/:languageID' render={routeProps => <LanguagePage name={routeProps.match.params.languageID} />} /> */}
            <Route path='/languages/:languageID' render={routeProps => <LanguagePage {...routeProps} />} />

             {/* component will instantiate a new component every time
                render will re-use the existing component  */}
        </Switch>
    </div>
  )
}


export default QuTypesRoutes;