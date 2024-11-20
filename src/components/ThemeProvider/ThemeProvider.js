'use client';
import React from 'react';
import Cookie from 'js-cookie';


export const ThemeContext = React.createContext();

function ThemeProvider({children}) {
  
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const savedTheme = Cookie.get('color-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-color-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-color-theme', nextTheme);
    Cookie.set('color-theme', nextTheme, { expires: 365 });
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
