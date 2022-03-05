// import react, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavMain from './Components/03-organisms/NavMain/NavMain.Component';
import HomePage from './Components/05-pages/HomePage/HomePage.Component';
import LanguagesRouts from './Components/06-routes/Languages.Routs';
import GamesPage from './Components/05-pages/GamesPage/GamesPage.Component';
import AboutPage from './Components/05-pages/AboutPage/AboutPage.Component';
import ContactPage from './Components/05-pages/ContactPage/ContactPage.Component';
// import QuTypesPage from './Components/06-routes/QuTypesRoutes.jsx';



function App() {
  return (
    <div>
      <NavMain/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route path='/languages' component={LanguagesRouts} />
        <Route path='/games' component={GamesPage} />
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

