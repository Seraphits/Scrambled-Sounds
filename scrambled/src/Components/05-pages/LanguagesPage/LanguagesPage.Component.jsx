import React from "react";
import { Link } from "react-router-dom";


const LanguagesPage = () => {
    return (
        <div>
            <h1>Languages Page</h1>
            <Link to='/languages/Tabla'>Tabla</Link>
            <Link to='/languages/Arabic'>Arabic</Link>
        </div> 
    );
};

export default LanguagesPage;