import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Components/05-pages/HomePage/HomePage.Component';
import LanguagesPage from './Components/05-pages/LanguagesPage/LanguagesPage.Component';
// import LanguagesRouts from './Components/06-routes/Languages.Routs';
import GamesPage from './Components/05-pages/GamesPage/GamesPage.Component';
import AboutPage from './Components/05-pages/AboutPage/AboutPage.Component';
import ContactPage from './Components/05-pages/ContactPage/ContactPage.Component';
import LanguagePage from './Components/05-pages/LanguagePage/LanguagePage.Component';

class Routes extends Component {
    render() {
        const getLanguage = props => {
            let name = props.match.params.name;
            let currentLanguage = this.props.languages.find(
                language => language.name.toLowerCase() === name.toLowerCase()
            );
            return <LanguagePage {...props} language={currentLanguage} />;
        };
        return (
            <Switch>   
                <Route exact path='/home' component={HomePage} />
                <Route exact path='/languages/:name' render={getLanguage} />
                <Route exact path='/languages' render={() => <LanguagesPage languages={this.props.languages} /> } />
                <Route exact path='/games' component={GamesPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/' component={HomePage} />
                <Redirect to='/' />
            </Switch> 
        )
    }
}

export default Routes;