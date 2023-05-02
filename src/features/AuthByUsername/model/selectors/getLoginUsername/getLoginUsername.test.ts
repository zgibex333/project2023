import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Dave',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Dave');
    });
    test('should work with empty state', () => {
        expect(getLoginUsername({} as StateSchema)).toEqual('');
    });
});
