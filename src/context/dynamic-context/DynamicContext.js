import React, { Component, createContext } from 'react';
import { ThemeContext, themes } from "./themeContext";

import ThemedButton from "./ThemedButton";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

class DynamicContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        }
    }

    toggleTheme = () => {
        this.setState(currentState => ({
            theme: currentState.theme === themes.light ? themes.dark : themes.light
        }))
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <div>
                    <ThemedButton>
                        I am outside using default value
                    </ThemedButton>
                </div>
            </div>
        )
    }
}

export default DynamicContext;