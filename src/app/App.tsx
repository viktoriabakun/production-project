import "./styles/index.scss";
import cn from "shared/lib/classNames";
import AppRouter from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
