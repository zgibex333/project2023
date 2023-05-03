import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendations';
import { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsPageSchema } from './model/types';
export type {
    ArticleDetailsCommentsSchema,
    ArticleDetailsRecommendationsSchema,
};
export default ArticleDetailsPage;
