import { StateSchema } from '@/app/providers/storeProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        expect(getProfileIsLoading({} as StateSchema)).toEqual(undefined);
    });
});
