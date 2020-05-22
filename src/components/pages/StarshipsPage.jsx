import React from 'react';
import ListItems from "../ListItems";
import StarshipDetails from "../StarshipDetails";
import ErrorIndicator from "../ErrorIndicator";
import Swapi from "../../services/SwapiService";

class StarshipsPage extends React.Component{

  state = {
    hasError: false,
    selectedStarshipId: null
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  onStarshipSelected = (selectedStarshipId) => {
    this.setState({ selectedStarshipId })
  };

  render(){

    const { selectedStarshipId, hasError } = this.state;

    if (hasError){
      return <ErrorIndicator/>
    }

    return (
        <>
          <div className='col-md-6'>
            <ListItems
                onItemSelected={this.onStarshipSelected}
                getData={Swapi.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <StarshipDetails starshipId={selectedStarshipId}/>
          </div>
        </>
    )
  }
}

export default StarshipsPage;
