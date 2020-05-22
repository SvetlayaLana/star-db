import React from 'react';
import ListItems from "../ListItems";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";
import Swapi from "../../services/SwapiService";

class PeoplePage extends React.Component{

    state = {
        hasError: false,
        selectedPersonId: null
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    onPersonSelected = (selectedPersonId) => {
        this.setState({ selectedPersonId })
    };

    render(){

        const { selectedPersonId, hasError } = this.state;

        if (hasError){
            return <ErrorIndicator/>
        }

        return (
            <>
                <div className='col-md-6'>
                    <ListItems
                        onItemSelected={this.onPersonSelected}
                        getData={Swapi.getAllPeople}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPersonId}/>
                </div>
            </>
        )
    }
}

export default PeoplePage;
