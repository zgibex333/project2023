import { StateSchema } from 'app/providers/storeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form data', () => {
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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        expect(getProfileForm({} as StateSchema)).toEqual(undefined);
    });
});
