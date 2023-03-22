import { StateSchema } from 'app/providers/storeProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailsComments?.error;
