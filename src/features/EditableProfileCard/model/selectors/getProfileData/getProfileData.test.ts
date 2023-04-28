import { StateSchema } from 'app/providers/storeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'user',
            age: 26,
            avatar: 'Avatar',
            first: 'John',
            lastname: 'Doe',
            city: 'Warszawa',
            country: Country.Poland,
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        expect(getProfileData({} as StateSchema)).toEqual(undefined);
    });
});
