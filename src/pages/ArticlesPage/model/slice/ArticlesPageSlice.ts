import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { ArticlesPageShema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
});

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageShema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.GRID,
        entities: {},
        ids: [],
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articlesAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
    articlesPageSlice;
