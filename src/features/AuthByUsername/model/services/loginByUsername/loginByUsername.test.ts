import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test('should fulfill with success response', async () => {
    //     const userValue = {
    //         username: 'Dave',
    //         id: '1',
    //     };
    //     mockedAxios.post.mockReturnValue(
    //         Promise.resolve({
    //             data: userValue,
    //         }),
    //     );
    //     const action = loginByUsername({
    //         username: userValue.username,
    //         password: '123',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAuthData(userValue),
    //     );
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    // test('should reject with error response', async () => {
    //     mockedAxios.post.mockReturnValue(
    //         Promise.resolve({
    //             status: 403,
    //         }),
    //     );
    //     const action = loginByUsername({
    //         username: 'Dave',
    //         password: '123',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toEqual('error');
    // });

    it('should fulfill with success response', async () => {
        const userValue = {
            username: 'Dave',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                data: userValue,
            }),
        );

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: userValue.username,
            password: '123',
        });
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });
    test('should reject with error response', async () => {
        mockedAxios.post.mockReturnValue(
            Promise.resolve({
                status: 403,
            }),
        );

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: 'Dave',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
