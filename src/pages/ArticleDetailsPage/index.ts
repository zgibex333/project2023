import { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendations';
import { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export { articleDetailsPageReducer } from './model/slices';
export { ArticleDetailsPageSchema } from './model/types';
export { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema };
export default ArticleDetailsPage;
