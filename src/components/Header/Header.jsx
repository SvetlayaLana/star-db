import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return(
        <div className='container header d-flex'>
            <h3>
                <Link to='/star-db'>Star DB</Link>
            </h3>
            <ul className='d-flex'>
                <li>
                    <Link to='/star-db/people'>People</Link>
                </li>
                <li>
                    <Link to='/star-db/planets'>Planets</Link>
                </li>
                <li>
                    <Link to='/star-db/starships'>Starships</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
