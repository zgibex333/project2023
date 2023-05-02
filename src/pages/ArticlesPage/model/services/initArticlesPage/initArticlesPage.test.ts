import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { articlesPageActions } from '../../slice/ArticlesPageSlice';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    it('loads data when is not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                _inited: false,
            },
        });
        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            articlesPageActions.initState(),
        );
    });
    it('doesnt load data when is inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                _inited: true,
            },
        });
        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.dispatch).not.toHaveBeenCalledWith(
            articlesPageActions.initState(),
        );
    });
});
