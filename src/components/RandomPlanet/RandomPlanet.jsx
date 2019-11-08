import React from 'react';
import './RandomPlanet.css';

const RandomPlanet = () => {
    return(
      <div className='random-planet d-flex jumbotron'>
          <img src="./img/logo.jpg" alt="Planet" className='random-planet-img'/>
          <div className='random-planet-desc'>
              <h2>Naboo</h2>
              <ul className="list-group">
                  <li className="list-group-item">
                      <span>Population </span>
                      <span>45000000</span>
                  </li>
                  <li className="list-group-item">
                      <span>Rotation Period </span>
                      <span>26</span>
                  </li>
                  <li className="list-group-item">
                      <span>Diameter </span>
                      <span>122122</span>
                  </li>
              </ul>
          </div>
      </div>
    );
};

export default RandomPlanet;
