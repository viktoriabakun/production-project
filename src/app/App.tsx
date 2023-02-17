import cn from "shared/lib/classNames";
import AppRouter from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
