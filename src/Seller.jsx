import React, { Component } from 'react'
import Location from './Location.jsx'
import Item from './Item.jsx'
class Seller extends Component {
    render = () => {
        return (<div>

            <h3>Name: {this.props.name}</h3>
            <h4>Location</h4>
            <Location
                city={this.props.location.city}
                country={this.props.location.country} />
            <h4>Items</h4>
            {this.props.items.map(item => {
                return (<Item
                    id={item.itemid}
                    price={item.price}
                    description={item.description}
                    location={item.shipsFrom} />)
            })
            })
        </div>)
    }
}

export default Seller