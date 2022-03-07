import React, { Component } from "react";
import { Link } from "react-router-dom";

class LanguagesPage extends Component {
    render() {
        return (
            <div>
            <h1>Languages Page</h1>
                <Link to='/languages/tabla'>Tabla</Link>


            {/* {this.props.languages.map(l => (
                <div key={l.languageID}>
                    <Link to={'/languages/${l.name}'}>{l.name}</Link>
                </div>
            ))} */}
        </div> 
        );
    }
}

export default LanguagesPage;