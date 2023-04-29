import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/roleSelector';

export {
    userActions,
    userReducer,
    getUserAuthData,
    getUserInited,
    getUserRoles,
    isUserAdmin,
    isUserManager,
};

export type { UserSchema, User } from './model/types/user';

export { UserRole } from './model/consts/consts';
