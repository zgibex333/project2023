import { ArticlesPageShema } from './model/types/articlesPageSchema';
import { ArticlesPageAsync as ArticlesPage } from './ui/ArticlesPage/ArticlesPage.async';

export { articlesPageReducer } from './model/slice/ArticlesPageSlice';
export type { ArticlesPageShema };
export default ArticlesPage;
