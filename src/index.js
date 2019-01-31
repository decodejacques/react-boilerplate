import ReactDOM from 'react-dom'
import React, { Component } from 'react'
const wrapper = document.getElementById("root");
console.log(what)
class App extends Component {

    render() {
        let bar = {
            name: "john",
            bar: () => {
                console.log(this.name)
                return (<div>hey</div>)
            }
        }
        return bar.bar()
    }
}
ReactDOM.render(<App />, wrapper)