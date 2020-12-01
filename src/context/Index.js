import React, { Component, createContext } from 'react';

import './Index.css';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = createContext('light');
// React DevTools uses this string to determine what to display for the context.
ThemeContext.displayName = 'MyThemeContext';


export default class Context extends Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        return (
            <div className="context-root">
                <ThemeContext.Provider value='dark'>
                    {/*
                        The value argument passed to the function will be equal
                        to the value prop of the closest Provider for this context above in the tree.
                    */}
                    <div>
                        <Toolbar />
                        <SidePanel />
                    </div>
                </ThemeContext.Provider>
                {/*
                    If there is no Provider for this context above, the value argument
                    will be equal to the defaultValue that was passed to createContext().
                */}
                <div>
                    <ThemedButton />
                    <SidePanel />
                </div>
            </div>
        )
    }
}


// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext; // if experimental `public class field syntax` is active; otherwise use the below one
    render() {
        return (
            <button>{this.context}</button>
        )
    }
}
// can also be attached like below
// ThemedButton.contextType = ThemedButton;


// A React component that subscribes to context changes.
// This lets you subscribe to a context within a function component.
function SidePanel() {
    return (
        <ThemeContext.Consumer>
            {
                value => (
                    <div>I am side panel with context value {value}</div>
                )
            }
        </ThemeContext.Consumer>
    )
}


