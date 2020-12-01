import { createContext } from 'react';

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        background: '#222222'
    }
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});


