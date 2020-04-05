import React from 'react'
import './App.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            number: 100
        }
        this.changeNumber=this.changeNumber.bind(this)
    }

    changeNumber(){
        this.setState(prevState => {
            return{
                number: prevState.number + 200
            }
        })
    }

    render(){
        return(
            <div className='App'>
                <h1>{this.state.number}</h1>
                <button onClick={this.changeNumber}>Click me</button>
            </div>
        )
    }
}

export default App