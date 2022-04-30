import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavMain from './Components/03-organisms/NavMain/NavMain.Component';
import HomePage from './Components/05-pages/HomePage/HomePage.Component';
import LanguagesPage from './Components/05-pages/LanguagesPage/LanguagesPage.Component';
// import LanguagesRouts from './Components/06-routes/Languages.Routs';
import GamesPage from './Components/05-pages/GamesPage/GamesPage.Component';
import AboutPage from './Components/05-pages/AboutPage/AboutPage.Component';
import ContactPage from './Components/05-pages/ContactPage/ContactPage.Component';
import LanguagePage from './Components/05-pages/LanguagePage/LanguagePage.Component';
// import QuTypesPage from './Components/06-routes/QuTypesRoutes.jsx';



class App extends Component {
  static defaultProps = {
    languages: [
      {
        languageID: 0,
        name:"Tabla",
        description: "is a drum from India."
      },
      {
        languageID:1,
        name:"Arabic",
        description: "is a language spoken by Muslims."
      },
      {
        languageID:2,
        name:"English",
        description: "is a language spoken by many people."
      }
    ]
  };
  render() {
    return (
      <div>  
        <NavMain/>
        <Switch>   
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/languages/:name' render={() => <LanguagePage languages={this.props.languages} /> } />
          <Route exact path='/languages' render={() => <LanguagesPage languages={this.props.languages} /> } />
          <Route exact path='/games' component={GamesPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route path='/' component={HomePage} />
        </Switch> 
      </div>
    )
  }
    
//   return (
//     <div>
//       
//       
//         
//         
//         
//         
//         
//         
//         {/* component will instantiate a new component every time
//         render will re-use the existing component  */}
//       </Switch>
//     </div>
//   )
}


export default App;

