import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
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
            <VStack
                data-testid="ArticleRecommendationsList"
                max
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    view={ArticleView.GRID}
                    target={`${'_blank'}`}
                />
            </VStack>
        );
    },
);
export default ArticleRecommendationsList;
