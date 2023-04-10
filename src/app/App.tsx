import cn from 'shared/lib/classNames';
import AppRouter from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

function App() {
    const { theme } = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
