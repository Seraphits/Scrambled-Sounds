import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Card from "../../02-molecules/CardLanguage/CardLanguage.Component";

class LanguagesPage extends Component {
    render() {
    // const CardLaguage = this.props.lan

        return (
            <div>
            <h1>Languages Page</h1>
            <Card />
                {/* <Link to='/languages/tabla'>Tabla</Link> */}


            {/* {this.props.languages.map(l => (
                <div key={l.languageID}>
                    <h3><Link to={`/languages/${l.name}`}>{l.name}</Link></h3>
                </div>
            ))} */}
        </div> 
        );
    }
}

export default LanguagesPage;