import React, { Component, createContext } from 'react';

const MyContext = createContext('');

function Toolbar() {
    return (
        <div>I am Toolbar</div>
    )
}

/**
 * Because context uses reference identity to determine when to re-render,
 * there are some gotchas that could trigger unintentional renders in consumers
 * when a provider’s parent re-renders.
 * For example, the code below will re-render all consumers
 * every time the Provider re-renders because a new object is always created for value:
 */
class BadContextCaveat extends Component {
    render() {
        return (
            <MyContext.Provider value={{something: 'something'}}>
                <Toolbar />
            </MyContext.Provider>
        );
    }
}

/**
 * To get around this, lift the value into the parent’s state:
 */
class BetterContextCaveat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {something: 'something'},
        };
    }

    render() {
        return (
            <MyContext.Provider value={this.state.value}>
                <Toolbar/>
            </MyContext.Provider>
        );
    }
}