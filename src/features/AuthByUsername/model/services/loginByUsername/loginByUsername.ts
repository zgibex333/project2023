import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/storeProvider';
import axios, { AxiosInstance } from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = '',
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;
    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        });
        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
