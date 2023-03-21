import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRoutesProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/PageLoader';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const node = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <RequireAuth>{node}</RequireAuth> : node
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
export default memo(AppRouter);
