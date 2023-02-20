import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    </div>
);

export default AppRouter;
