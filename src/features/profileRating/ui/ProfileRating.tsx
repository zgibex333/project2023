import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import {
    useGetProfileRatingQuery,
    useRatePtofileMutation,
} from '../api/profileRatingApi';
import { getProfileData } from '@/features/EditableProfileCard/model/selectors/getProfileData/getProfileData';
import Skeleton from '@/shared/ui/Skeleton/Skeleton/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const { data, isLoading } = useGetProfileRatingQuery({
        userId: authData?.id ?? '',
        profileId: profileId ?? '',
    });

    const [rateProfileMutation] = useRatePtofileMutation();

    const handleRateProfileMutation = useCallback(
        (rating: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    profileId: profileId ?? '',
                    userId: authData?.id ?? '',
                    rate: rating,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [rateProfileMutation, authData, profileId],
    );

    const onAccept = useCallback(
        (rating: number, feedback?: string) => {
            handleRateProfileMutation(rating, feedback);
        },
        [handleRateProfileMutation],
    );
    const onCancel = useCallback(
        (rating: number) => {
            handleRateProfileMutation(rating);
        },
        [handleRateProfileMutation],
    );

    const canVote = authData?.id !== profileData?.id;

    const rate = data?.[0]?.rate;

    if (!canVote) {
        return null;
    }

    if (isLoading) {
        return <Skeleton width="100%" height="140px" />;
    }

    return (
        <RatingCard
            className={classNames('', {}, [className])}
            title={t('Оцените профиль')}
            feedbackTitle={t('Ваш отзыв')}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rate}
        />
    );
});
export default ProfileRating;
