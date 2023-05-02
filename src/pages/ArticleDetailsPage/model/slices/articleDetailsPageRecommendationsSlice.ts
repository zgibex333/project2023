import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';
import { Article } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendations';

const recommendAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
});

const articleDetailsDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsDetailsPageRecommendationsSlice',
    initialState:
        recommendAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const getArticleRecommendations =
    recommendAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendAdapter.getInitialState(),
    );

export const { reducer: articleDetailsDetailsPageRecommendationsReducer } =
    articleDetailsDetailsPageRecommendationsSlice;
