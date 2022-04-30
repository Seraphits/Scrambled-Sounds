import React, { Component } from 'react';
import LanguagesPage from './Components/05-pages/LanguagesPage/LanguagesPage.Component';
import LanguagePage from './Components/05-pages/LanguagePage/LanguagePage.Component';
import seedLangauges from './Data/seedLangauges';

// import NavMain from './Components/03-organisms/NavMain/NavMain.Component';

class App extends Component {
  render() {
    return (
      <div>  
      {/* Nav bar go here */}
        {/* <NavMain/> */}
        {/* Show list of Languges */}
        <LanguagesPage  />
        {/* Show one Language */}
        <LanguagePage {...seedLangauges[1]} />
      </div>
    )
  }
}


export default App;

