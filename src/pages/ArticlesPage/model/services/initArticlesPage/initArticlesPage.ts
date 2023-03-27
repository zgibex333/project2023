import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const _inited = getArticlesPageInited(getState());
    if (!_inited) {
        dispatch(articlesPageActions.initState());
        dispatch(
            fetchArticlesList({
                page: 1,
            }),
        );
    }
});
