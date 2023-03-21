import React from 'react';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth)
        return (
            <Navigate
                to={RoutePath[AppRoutes.MAIN]}
                state={{ from: location }}
                replace
            />
        );

    return children;
};

export default RequireAuth;
