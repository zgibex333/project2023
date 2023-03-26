import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface fetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());

    try {
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
