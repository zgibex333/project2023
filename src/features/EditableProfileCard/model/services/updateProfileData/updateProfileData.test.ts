import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/EditableProfileCard';
import { updateProfileData } from './updateProfileData';

const profileData = {
    username: 'user',
    age: 26,
    avatar: 'Avatar',
    first: 'John',
    lastname: 'Doe',
    city: 'Warszawa',
    country: Country.Poland,
    currency: Currency.EUR,
    id: '1',
};

describe('updateProfileData.test', () => {
    it('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData,
            },
        });
        thunk.api.put.mockReturnValue(
            Promise.resolve({
                data: profileData,
            }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });
    test('should reject with server error response', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData,
            },
        });
        thunk.api.put.mockReturnValue(
            Promise.resolve({
                status: 403,
            }),
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('should reject with client error response', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, first: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
