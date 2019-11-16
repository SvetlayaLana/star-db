import React from 'react';
import './RandomPlanet.css';
import Swapi from '../../services/SwapiService';
import Spinner from "../Spinner";

class RandomPlanet extends React.Component{

    constructor(){
        super();

        this.state = {
            planet: null
        };

        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    };

    updatePlanet(){
        const randomID = Math.floor(Math.random()*61)+1;
        Swapi.getPlanet(randomID)
            .then(this.onPlanetLoaded);
    };

    render() {
        if(!this.state.planet)
            return (
                <div className='random-planet d-flex jumbotron'>
                    <Spinner/>
                </div>);

        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

        return(
            <div className='random-planet d-flex jumbotron'>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Planet' className='random-planet-img' />
                <div className='random-planet-desc'>
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
            </div>
        );
    }
}

export default RandomPlanet;
