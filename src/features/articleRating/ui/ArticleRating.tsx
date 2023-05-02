import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRatingQuery,
    useRateArticleMutation,
} from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import Skeleton from '@/shared/ui/Skeleton/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const userData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const { data, isLoading } = useGetArticleRatingQuery({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticleMutation();

    const handleRateArticleMutation = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    feedback,
                    rate: starsCount,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticleMutation(starsCount, feedback);
        },
        [handleRateArticleMutation],
    );
    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticleMutation(starsCount);
        },
        [handleRateArticleMutation],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0]?.rate;

    return (
        <RatingCard
            title={t('Как вам статья?')}
            feedbackTitle={t('Оставьте ваш отзыв')}
            hasFeedback
            className={className}
            rate={rating}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});
export default ArticleRating;
