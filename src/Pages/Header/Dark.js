import React, { useEffect, useState } from 'react';

const Dark = () => {
    const [theme, setTheme] = useState();
    const colorTheme = theme === "dark" ? 'light' : 'dark';


    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme, colorTheme]);


    return [colorTheme, setTheme];
};

export default Dark;