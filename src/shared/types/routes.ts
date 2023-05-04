import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line zgibex-plugin/layers-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
