import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss";
import {AboutPageLazy} from "./pages/AboutPage/index.lazy";
import {MainPageLazy} from "./pages/MainPage/index.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/">Main</Link>
            <Link to="about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
           <Routes>
               <Route path="/about" element={<AboutPageLazy/>} />
               <Route path="/" element={<MainPageLazy/>}/>
           </Routes>
            </Suspense>
        </div>
    );
};

export default App;
