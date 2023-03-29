import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsDetailsPageRecommendationsReducer,
    });
