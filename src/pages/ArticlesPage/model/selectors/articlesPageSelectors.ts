import { StateSchema } from 'app/providers/storeProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.GRID;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 9;
export const getArticlesPageNumber = (state: StateSchema) =>
    state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
