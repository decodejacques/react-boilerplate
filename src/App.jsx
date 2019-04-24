import React, { Component } from 'react'
import Seller from './Seller.jsx'
import data from './data.js'

class App extends Component {
    render = () => {
        return (<div>
            <h1> Sellers! </h1>
            {
                data.map(seller => {
                    return (<Seller
                        name={seller.name}
                        location={seller.location}
                        items={seller.items} />)
                })
            }
        </div>)
    }
}
export default App