import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

type Book = { bookId: string; title: string };

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    ),
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsComments || commentsAdapter.getInitialState(),
);

export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books,
// );

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState());
