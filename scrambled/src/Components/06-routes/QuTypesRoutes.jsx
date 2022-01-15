// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import QuTypesPage from '../05-pages/QuTypeList/QuTypeListPage.Component';
// import QuType1 from './Components/05-pages/Home/HomePage.Component';
// import './App.css';

function QuTypesRoutes() {
  return (
    <div>
       <Switch>
        <Route exact path='/qutypes/' component={QuTypesPage} />
        {/* <Route exact path='/qutypes/qutype1' component={QuType1} /> */}
        {/* <Route exact path='/qutypes/qutype2' component={QuTypesPage} />s */}
      </Switch>
    </div>
  )
}


export default QuTypesRoutes;