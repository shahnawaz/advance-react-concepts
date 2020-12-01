import React, { Component, createContext } from 'react';

// Theme context, default to light theme
const ThemeContext = createContext('light');

// Signed-in user context
const UserContext = createContext({
    name: 'Guest',
});

function Layout() {
    return (
        <div>
            <Content />
        </div>
    );
}

// A component may consume multiple contexts
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (<>
                        <div>User: { user.name }</div>
                        <div>Theme: { theme }</div>
                    </>)}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

class MultipleContext extends Component {
    render() {
        const {signedInUser, theme} = this.props;

        // App component that provides initial context values
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

export default MultipleContext;