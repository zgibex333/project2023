import { StateSchema } from '@/app/providers/storeProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.error;
