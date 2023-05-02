import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => {
            const hasRequiredRole = userRoles?.includes(requiredRole);
            return hasRequiredRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate
                to={RoutePath[AppRoutes.MAIN]}
                state={{ from: location }}
                replace
            />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={RoutePath[AppRoutes.FORBIDDEN]}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export default RequireAuth;
