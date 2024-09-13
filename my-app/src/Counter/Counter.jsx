import { Component } from "react"

class Counter extends Component{
    state ={
        value:0,
    }

    handleClickIncrement = () => {
        this.setState((prevState) => ({value: prevState.value += 1}))
    }

    handleClickDecrement = () => {
        this.setState((prevState) => ({value: prevState.value -= 1}))
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClickIncrement}>+1</button>
                    <p>{this.state.value}</p>
                <button onClick={this.handleClickDecrement}>-1</button>
            </div>
                )
            }
}

export default Counter