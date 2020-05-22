import React from 'react';

import './ListItems.css';
import Spinner from "../Spinner";

class ListItems extends React.Component {

    state = {
        itemsList: null,
    };

    componentDidMount() {
       this.props.getData()
            .then((itemsList) => this.setState({
                itemsList
            }))
    }

    renderItems(items) {
        return items.map(item => {

            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(item.id)}
                >
                    {item.name}
                </li>
            )
        })
    }

    render(){
        if (!this.state.itemsList)
            return <Spinner/>;

        const { itemsList } = this.state;

        return (
            <>
                <ul className="list-group list-group-left">
                    {this.renderItems(itemsList)}
                </ul>
            </>
        );
    }
}

export default ListItems;
