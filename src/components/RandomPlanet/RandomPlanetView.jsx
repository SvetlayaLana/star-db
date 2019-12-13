import React from 'react';

const RandomPlanetView = ({ planet: { id, name, population, rotationPeriod, diameter }}) => {
    return (
        <>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Planet' className='random-planet-img'/>
        <div className = 'random-planet-desc'>
            <h2>{name}</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <span>Population </span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span>Rotation Period </span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span>Diameter </span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </div>
        </>);
};

export default RandomPlanetView;