import { getArticleDetailsData } from './model/selectors/articleDetails.selectors';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';
import ArticleTypesTabs from './ui/ArticleTypesTabs/ArticleTypesTabs';
import ArticleViewSwitcher from './ui/ArticleViewSwitcher/ArticleViewSwitcher';

export { default as ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export { ArticleDetails, ArticleList, ArticleViewSwitcher, ArticleTypesTabs };
export { getArticleDetailsData };
export { articleDetailsReducer };
export { type ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export {
    type Article,
    type ArticleBlock,
    type ArticleBlockBase,
    type ArticleCodeBlock,
    type ArticleImageBlock,
    type ArticleTextBlock,
} from './model/types/article';

export {
    ArticleView,
    ArticleSortField,
    ArticleType,
    ArticleBlockType,
} from './model/consts/consts';
