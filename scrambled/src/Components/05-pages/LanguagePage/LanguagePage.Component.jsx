import React, { Component } from "react";
import Card from "../../02-molecules/CardLetter/CardLetter.Component";


class LanguagePage extends Component {
    render() {
        const cardLetter = this.props.letters.map(letter => (
            <Card name={letter.name} />
        ) );
        return (
            <div>
                <h1>Language Page</h1>
                <h3>Tabla</h3>
                {/* Letters List */}
                <p>List of Letters</p> 
                 {cardLetter}
            </div>
        )
    }
}
export default LanguagePage;