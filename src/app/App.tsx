import cn from "shared/lib/classNames";
import AppRouter from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
