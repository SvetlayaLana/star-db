import React from 'react';
import './PlanetDetails.css';
import Spinner from "../Spinner";
import Swapi from "../../services/SwapiService";

class PlanetDetails extends React.Component {

  state = {
    planet: null,
    error: false,
    loading: false
  };

  updatePlanet() {
    const { planetId } = this.props;

    if(!planetId)
      return;

    this.setState({loading:true});

    Swapi.getPlanet(planetId)
        .then(planet => {
          this.setState({ planet, loading: false })
        })
        .catch(err => this.setState({ error: true, loading: false }));
  }

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps){
    if(this.props.planetId !== prevProps.planetId){
      this.updatePlanet();
    }
  }

  render() {
    if(this.state.loading) {
      return <Spinner/>;
    }
    if(!this.state.planet)
      return <div className='planet-details-null'>Select item from the list</div>;

    const { name, diameter, population, rotationPeriod } = this.state.planet;

    return(
        <div className='planet-details card'>
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="term">Diameter: </span>
                <span>{diameter}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Population: </span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation period: </span>
                <span>{rotationPeriod}</span>
              </li>
            </ul>
          </div>
        </div>
    );
  }
};

export default PlanetDetails;
