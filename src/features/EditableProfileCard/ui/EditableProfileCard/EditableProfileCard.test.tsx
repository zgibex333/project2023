import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCard from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Kiev',
    username: 'admin123',
};

describe('features/EditProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
        jest.spyOn($api, 'get').mockReturnValue(
            Promise.resolve({
                data: profile,
            }),
        );
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('Readonly should switch', async () => {
        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            await screen.findByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });
    test('When canceling values should be changed to initials', async () => {
        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.EditButton'),
        );
        const firstnameField = await screen.findByTestId(
            'ProfileCard.Firstname',
        );
        const lastnameField = await screen.findByTestId('ProfileCard.Lastname');
        expect(firstnameField).toHaveValue(profile.first);
        expect(lastnameField).toHaveValue(profile.lastname);
        await userEvent.clear(firstnameField);
        await userEvent.clear(lastnameField);
        expect(firstnameField).toHaveValue('');
        expect(lastnameField).toHaveValue('');
        await userEvent.type(firstnameField, 'user1');
        await userEvent.type(lastnameField, 'lastname1');
        expect(firstnameField).toHaveValue('user1');
        expect(lastnameField).toHaveValue('lastname1');

        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.CancelButton'),
        );
        expect(firstnameField).toHaveValue(profile.first);
        expect(lastnameField).toHaveValue(profile.lastname);
    });
    test('Should show validation error with incorrect data', async () => {
        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.EditButton'),
        );
        const firstnameField = await screen.findByTestId(
            'ProfileCard.Firstname',
        );

        await userEvent.clear(firstnameField);

        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.SaveButton'),
        );
        expect(
            await screen.findByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });
    test('If there are no validation errors should send PUT request', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.EditButton'),
        );
        const firstnameField = await screen.findByTestId(
            'ProfileCard.Firstname',
        );

        await userEvent.clear(firstnameField);
        await userEvent.type(firstnameField, 'New username');

        await userEvent.click(
            await screen.findByTestId('EditableProfileCardHeader.SaveButton'),
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});
