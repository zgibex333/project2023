import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('Dave'),
            ),
        ).toEqual({
            username: 'Dave',
        });
    });
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('Dave'),
            ),
        ).toEqual({
            password: 'Dave',
        });
    });
    test('set isLoading', async () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };

        expect(
            loginReducer(state as LoginSchema, loginByUsername.pending),
        ).toEqual({
            isLoading: true,
        });
    });
});
