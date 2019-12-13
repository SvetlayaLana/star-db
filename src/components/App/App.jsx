import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorIndicator from "../ErrorIndicator";
import Pages from "../pages";

class App extends React.Component{

    state = {
        hasError: false
    };

    componentDidCatch(){
        this.setState({ error: true })
    }

    render() {
        const { hasError } = this.state;
        console.log(hasError);

        if(hasError)
            return <ErrorIndicator />;

        return (
            <div className='container'>
                <Router>
                    <Header />
                    <RandomPlanet />
                    <Pages />
                </Router>
            </div>
        );
    }
}

export default App;
