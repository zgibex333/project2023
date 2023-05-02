import { StateSchema } from '@/app/providers/storeProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails.selectors';

describe('articleDetails selectors', () => {
    it('should return data', () => {
        const data = {
            id: '1',
            title: 'Title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    it('should return correct data with empty state', () => {
        expect(getArticleDetailsData({} as StateSchema)).toEqual(undefined);
    });
    it('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    it('should return correct isLoading with empty state', () => {
        expect(getArticleDetailsIsLoading({} as StateSchema)).toEqual(
            undefined,
        );
    });
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
    it('should return correct error with empty state', () => {
        expect(getArticleDetailsError({} as StateSchema)).toEqual(undefined);
    });
});
