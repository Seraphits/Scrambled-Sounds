// import { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import LanguagesPage from '../05-pages/LanguagesPage/LanguagesPage.Component';
// // import LanguagePage from '../05-pages/LanguagesPage/LanguagesPage.Component';
// // import QuType1 from './Components/05-pages/Home/HomePage.Component';
// // import './App.css';

// class LanguagesRoutes extends Component {
    // static defaultProps = {
    //     languages: [
    //         {
    //             languageID: 1,
    //             name:"Tabla",
    //             Description: "is a drum from India."
    //         },
    //         {
    //             languageID:2,
    //             name:"Arabic",
    //             Description: "is a language spoken by Muslims."
    //         }
    //     ]
    // };
//     render() {
//         // const getLanguage = props => {
//         //     let name = props.match.params.name;
//         //     let currentLanguage = this.props.languages.find(
//         //         language => language.name === name
//         //     );
//         //     return <LanguagePage {...props} language={currentLanguage} />;
//         // };
//         return (
//             <div>
//                 <Switch>
//                     <Route exact path='/languages' render={routeProps => <LanguagesPage languages={this.props.languages} /> } />
//                     {/* <Route exact path='/languages/tabla' component={LanguagePage} /> */}
//                     {/* <Route exact path='/languages/tabla' render={() => <LanguagePage/> } /> */}
//                     {/* <Route path='/languages/:languageID' render={getLanguage} /> */}
//                     {/* <Route path='/languages/:languageID' render={routeProps => <LanguagePage {...routeProps} />} /> */}

//                     {/* component will instantiate a new component every time  
//                         render will re-use the existing component  */}
//                 </Switch>
//             </div>
//         ); 
//     }
// };

// export default LanguagesRoutes;