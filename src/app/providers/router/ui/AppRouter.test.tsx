import { screen } from '@testing-library/react';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/const/routes';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { UserRole } from '@/entities/User';

describe('appRouter', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('Page should not be found', async () => {
        componentRender(<AppRouter />, {
            route: '/randomValue12313214',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    test('should redirect unauthorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('should give access to authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                    },
                },
            },
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test('should redirect if user doesnt have required role', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                    },
                },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('should give access if user have required role', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
