// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/05-pages/HomePage/HomePage.Component';
import LanguagesPage from './Components/05-pages/LanguagesPage/LanguagesPage.Component';
import GamesPage from './Components/05-pages/GamesPage/GamesPage.Component';
import AboutPage from './Components/05-pages/AboutPage/AboutPage.Component';
import ContactPage from './Components/05-pages/ContactPage/ContactPage.Component';
// import QuTypesPage from './Components/06-routes/QuTypesRoutes.jsx';



function App() {
  return (
    <div>
      <nav>
        Nav bar goes here
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/languages' component={LanguagesPage} />
        <Route exact path='/games' component={GamesPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route path='/' component={HomePage} />
        {/* component will instantiate a new component every time
        render will re-use the existing component  */}
      </Switch>
    </div>
  )
}


export default App;

