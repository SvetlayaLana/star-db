import React from 'react';
import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ListItems from '../ListItems';
import PersonDetails from '../PersonDetails';
import PlanetDetails from '../PlanetDetails';
import StarshipDetails from '../StarshipDetails';

class App extends React.Component{

    render() {
        return (
            <div className='container'>
                <Header />
                <RandomPlanet />

                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ListItems/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
