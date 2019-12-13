import React from 'react';

class ErrorButton extends React.Component{
    state = {
        renderError: false
    };

    render() {
        if(this.state.renderError){
            this.foo.bar = 0;
        }

        return(
            <button onClick={() => this.setState({renderError: true})} className='btn btn-danger btn-lg'>Throw error</button>
        )
    }

}

export default ErrorButton;