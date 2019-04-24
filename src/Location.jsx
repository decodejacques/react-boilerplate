import React, { Component } from 'react'
class Location extends Component {
    render = () => {
        return (<div>
            <div> city: {this.props.city} </div>
            <div> country: {this.props.country} </div>
        </div>)
    }
}
export default Location