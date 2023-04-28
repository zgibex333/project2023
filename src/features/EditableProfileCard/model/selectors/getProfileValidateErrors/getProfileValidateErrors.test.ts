import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileError } from '../../types/EditableProfileCard';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return validateErrors value', () => {
        const errors = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.NO_DATA,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        expect(getProfileValidateErrors({} as StateSchema)).toEqual(undefined);
    });
});
