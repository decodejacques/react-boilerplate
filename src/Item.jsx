import React, { Component } from 'react'
import Location from './Location.jsx'
class Item extends Component {
    render = () => {
        return (<div>
            <h4>id {this.props.id}</h4>
            <div>price {this.props.price}</div>
            <div>description {this.props.description}</div>
            <div>location <Location
                city={this.props.location.city}
                country={this.props.location.country} /></div>
        </div>)
    }
}

export default Item