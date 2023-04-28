import { StateSchema } from 'app/providers/storeProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should return readonly value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        expect(getProfileReadonly({} as StateSchema)).toEqual(undefined);
    });
});
