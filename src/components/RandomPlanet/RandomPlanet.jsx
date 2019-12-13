import React from 'react';

import './RandomPlanet.css';

import Swapi from '../../services/SwapiService';
import Spinner from "../Spinner";
import RandomPlanetView from "./RandomPlanetView";
import ErrorIndicator from "../ErrorIndicator";

class RandomPlanet extends React.Component{

    constructor(){
        super();

        this.state = {
            planet: {},
            loading: true,
            error: false
        };

    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };

    onError = (err) => {
        this.setState({ error: true, loading: false })
    };

    updatePlanet = () => {
        const randomID = Math.floor(Math.random()*61)+1;
        Swapi.getPlanet(randomID)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        return(
            <div className='random-planet d-flex jumbotron'>
                { loading ? <Spinner/> : error ? <ErrorIndicator/> : <RandomPlanetView planet={planet}/>}
            </div>
        );
    }
}

export default RandomPlanet;
