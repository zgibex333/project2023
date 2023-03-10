import { StateSchema } from 'app/providers/storeProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true when loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return false when not loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        expect(getLoginIsLoading({} as StateSchema)).toEqual(false);
    });
});
