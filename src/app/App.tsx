import React from 'react';
import {Link} from 'react-router-dom';
import "./styles/index.scss";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames";
import AppRouter from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/">Main</Link>
            <Link to="about">About</Link>
            <AppRouter />
        </div>
    );
};

export default App;
