import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/EditableProfileCard';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileError } from '../consts/ValidateProfileError';

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

describe('profileSlice.test', () => {
    test('test readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: profileData,
            form: {
                username: '',
            },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            data: profileData,
            validateErrors: undefined,
            readonly: true,
            form: profileData,
        });
    });
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: profileData,
            form: {
                username: '',
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'user11',
                }),
            ),
        ).toEqual({
            data: profileData,
            form: { username: 'user11' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(profileData, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: profileData,
            data: profileData,
        });
    });
});
