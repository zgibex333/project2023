import { StateSchema } from 'app/providers/storeProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.GRID;
