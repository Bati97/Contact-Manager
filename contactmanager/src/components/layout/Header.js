import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = (props) => {

    const {branding} = props;

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3  py-0">
            <div className = "container">
                <a href = "#" className = "navbar-brand">{branding}</a>
                <div>
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item">
                            <Link className="nav-link" to="/"><i className="fas fa-home"/>Home</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className="nav-link" to="/contact/add"><i className="fas fa-plus"/>Add</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className="nav-link" to="/about"><i className="fas fa-question"/>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
};


//style = {headingStyle} 
// const headingStyle = {
//     color: "green",
//     fontSize: "50px"
// }

export default Header;