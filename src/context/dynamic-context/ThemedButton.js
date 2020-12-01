import React, { Component } from 'react';
import {ThemeContext} from "./themeContext";

class ThemedButton extends Component {
    render() {
        const props = this.props;
        const theme = this.context;
        return (
            <button
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.color
                }}
            />
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;