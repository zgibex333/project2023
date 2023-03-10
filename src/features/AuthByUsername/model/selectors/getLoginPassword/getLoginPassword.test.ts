import { StateSchema } from 'app/providers/storeProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('1234');
    });
    test('should work with empty state', () => {
        expect(getLoginPassword({} as StateSchema)).toEqual('');
    });
});
