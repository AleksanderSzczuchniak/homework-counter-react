import React from 'react'
import Button from './Button'



class Counter extends React.Component {
    state = (JSON.parse(localStorage.getItem('Counter-state')) ||
        { number: this.props.startNumber || 0 }
    )

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'Counter-state',
        JSON.stringify(this.state)
    )

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

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <Button
                    onClick={this.addOneHandler}
                    label={'ADD 1'}
                />
                <Button
                    onClick={this.lessOneHandler}
                    label={'MINUS 1'}
                />
                <Button
                    onClick={this.addFiveHandler}
                    label={'ADD 5'}
                />
                <Button
                    onClick={this.lessFiveHandler}
                    label={'MINUS 5'}
                />
                <Button
                    onClick={this.zeroHandler}
                    label={'ZER0'}
                />
            </div>

        )
    }

}


export default Counter