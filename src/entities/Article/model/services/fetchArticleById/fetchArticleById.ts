import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'article/fetchArticleData',
    async (articleId: string | undefined, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            if (!articleId) {
                throw new Error('Id is required');
            }
            const response = await extra.api.get<Article>(
                `/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user',
                    },
                },
            );
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
