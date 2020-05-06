import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('I am in the CONSTRUCTOR of the Counter.js.');
    }


    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 3000);
        console.log('Contador DID MOUNT.')
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('Contador DID UPDATE')
        console.log('Contador previous state was:', prevState)
        console.log('Contador actual state is:', this.state)
    }


    componentWillUnmount() {
        console.log('Contador WILL UNMOUNT (and interval will be cleared)')
        clearInterval(this.timer)
    }


    render() {
        console.log('I am in the RENDER of the Counter.');
        return (
            <h1>Número de intervalos: {this.state.count}</h1>
        )
    }
}

export default Counter;