import "./styles/index.scss";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import cn from "shared/lib/classNames";
import AppRouter from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
};

export default App;
