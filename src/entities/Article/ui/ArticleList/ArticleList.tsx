import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { Article } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.LIST ? 3 : 9)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={Number(index)}
                view={view}
            />
        ));

const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.LIST,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    // <div
    //     className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    // >
    //     {articles.length > 0 ? articles.map(renderArticle) : null}
    //     {isLoading && getSkeletons(view)}
    // </div>

    const isBig = view === ArticleView.LIST;

    return (
        // @ts-ignore
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.map((article) => (
                <ArticleListItem
                    view={ArticleView.GRID}
                    article={article}
                    target={target}
                    key={article.id}
                    className={cls.card}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
export default ArticleList;
