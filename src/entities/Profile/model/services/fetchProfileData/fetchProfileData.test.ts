import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    it('success', async () => {
        const profileData = {
            username: 'user',
            age: 26,
            avatar: 'Avatar',
            first: 'John',
            lastname: 'Doe',
            city: 'Warszawa',
            country: Country.Poland,
            currency: Currency.EUR,
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data: profileData,
            }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });
    test('should reject with error response', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                status: 403,
            }),
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
