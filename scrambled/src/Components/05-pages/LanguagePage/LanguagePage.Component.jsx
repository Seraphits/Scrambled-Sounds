import React, { Component } from "react";
// import { Link } from "react-router-dom";

class LanguagePage extends Component {
    render() {
        const languageID = this.props.match.params.languageID;
        return (
            <div>
            <h1>Language Page</h1>   
            <h3>This is the page for {languageID} </h3>

        </div> 
        )
    }
}

export default LanguagePage;