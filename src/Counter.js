import React from 'react'
import Button from './Button'



class Counter extends React.Component {
    state = {
        number: this.props.startNumber || 0
    }
    addOneHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }
    lessOneHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }
    addFiveHandler = () => {
        this.setState({ number: this.state.number + 5 })
    }
    lessFiveHandler = () => {
        this.setState({ number: this.state.number - 5 })
    }
    zeroHandler = () => {
        this.setState({ number: 0 })
    }
}


export default Counter