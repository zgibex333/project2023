import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../consts/ValidateProfileError';
import { validateProfileData } from './validateProfileData';

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
describe('validateProfileData.test', () => {
    it('should work with correct data', async () => {
        const result = validateProfileData(profileData);
        expect(result).toEqual([]);
    });
    it('should find error with incorrect user data', async () => {
        const incorrectData = {
            ...profileData,
            first: '',
        };
        const result = validateProfileData(incorrectData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('should find error with incorrect age data', async () => {
        const incorrectData = {
            ...profileData,
            age: 0,
        };
        const result = validateProfileData(incorrectData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('should find error with incorrect country data', async () => {
        const incorrectData = {
            ...profileData,
            country: undefined,
        };
        const result = validateProfileData(incorrectData);
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('should find all errors with incorrect data', async () => {
        const incorrectData = {};
        const result = validateProfileData(incorrectData);
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
