import React from 'react';
import './PersonDetails.css';
import Spinner from "../Spinner";
import ErrorButton from '../ErrorButton';
import Swapi from "../../services/SwapiService";

class PersonDetails extends React.Component {

    state = {
        person: null,
        error: false,
        loading: false
    };

    updatePerson() {
        const { personId } = this.props;

        if(!personId)
            return;

        this.setState({loading:true});

        Swapi.getPerson(personId)
            .then(person => {
                this.setState({ person, loading: false })
            })
            .catch(err => this.setState({ error: true, loading: false }));
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }

    render() {
        if(this.state.loading) {
            return <Spinner/>;
        }
        if(!this.state.person)
            return <div className='person-details-null'>Select item from the list</div>;

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return(
            <div className='person-details card'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person-image" className="person-image"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year: </span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color: </span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }


};

export default PersonDetails;
