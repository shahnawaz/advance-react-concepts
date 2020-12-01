import React, { Component } from 'react';
import { ThemeContext, themes } from "./themeContext";
import ThemeTogglerButton from './ThemeTogglerButton';

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    )
}

class NestedContextUpdate extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(currentState => ({
                theme: currentState.theme === themes.light ? themes.dark : themes.light
            }))
        }

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }
    }

    render() {
        // The entire state is passed to the provider
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Content />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default NestedContextUpdate;