import { getArticleDetailsData } from './model/selectors/articleDetails.selectors';
import {
    Article,
    ArticleView,
    ArticleSortField,
    ArticleType,
} from './model/types/article';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';
import ArticleTypesTabs from './ui/ArticleTypesTabs/ArticleTypesTabs';
import ArticleViewSwitcher from './ui/ArticleViewSwitcher/ArticleViewSwitcher';

export { ArticleDetails, ArticleList, ArticleViewSwitcher, ArticleTypesTabs };
export { getArticleDetailsData };
export {
    Article,
    ArticleDetailsSchema,
    ArticleView,
    ArticleSortField,
    ArticleType,
};
