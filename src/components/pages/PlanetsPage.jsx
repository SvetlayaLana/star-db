import React from 'react';
import ListItems from "../ListItems";
import PlanetDetails from '../PlanetDetails'
import Swapi from "../../services/SwapiService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

class PlanetsPage extends React.Component {

    state = {
        selectedPlanetId: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    onPlanetSelected = (selectedPlanetId) => {
        this.setState({ selectedPlanetId });
    };

    render(){

        const { selectedPlanetId, hasError } = this.state;

        if (hasError){
            return <ErrorIndicator/>
        }

        return(
            <>
                <div className='col-md-6'>
                    <ListItems onItemSelected={this.onPlanetSelected} getData={Swapi.getAllPlanets}/>
                </div>
                {/*<div className="col-md-6">
                    <PlanetDetails planetId={selectedPlanetId}/>
                </div>*/}
            </>
        )
    }

};

export default PlanetsPage;