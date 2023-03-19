import { StateSchema } from 'app/providers/storeProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        expect(getProfileError({} as StateSchema)).toEqual(undefined);
    });
});
