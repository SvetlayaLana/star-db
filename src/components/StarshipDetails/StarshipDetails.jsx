import React from 'react';
import './StarshipDetails.css';
import Spinner from "../Spinner";
import Swapi from "../../services/SwapiService";

class StarshipDetails extends React.Component {

  state = {
    starship: null,
    error: false,
    loading: false
  };

  updateStarship() {
    const { starshipId } = this.props;

    if(!starshipId)
      return;

    this.setState({loading:true});

    Swapi.getStarship(starshipId)
        .then(starship => {
          this.setState({ starship, loading: false })
        })
        .catch(err => this.setState({ error: true, loading: false }));
  }

  componentDidMount() {
    this.updateStarship();
  }

  componentDidUpdate(prevProps){
    if(this.props.starshipId !== prevProps.starshipId){
      this.updateStarship();
    }
  }

  render() {
    if(this.state.loading) {
      return <Spinner/>;
    }
    if(!this.state.starship)
      return <div className='starship-details-null'>Select item from the list</div>;

    const { name, model, length, crew, passengers } = this.state.starship;

    return(
        <div className='starship-details card'>
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="term">Model: </span>
                <span>{model}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Length: </span>
                <span>{length}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Crew: </span>
                <span>{crew}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Passengers: </span>
                <span>{passengers}</span>
              </li>
            </ul>
          </div>
        </div>
    );
  }
};

export default StarshipDetails;
