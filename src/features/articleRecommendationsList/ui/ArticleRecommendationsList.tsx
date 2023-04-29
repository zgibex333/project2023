import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { useGetArticleRecommendationsListQuery } from '../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            isError,
        } = useGetArticleRecommendationsListQuery(3);

        if (isLoading || isError || !articles) {
            return null;
        }

        return (
            <VStack max gap="8" className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    view={ArticleView.GRID}
                    target={`${'_blank'}`}
                    virtualized={false}
                />
            </VStack>
        );
    },
);
export default ArticleRecommendationsList;
