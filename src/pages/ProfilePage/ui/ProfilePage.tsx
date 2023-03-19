import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const ValidateProfileErrorTranslates: Record<ValidateProfileError, string> =
        {
            [ValidateProfileError.SERVER_ERROR]: t(
                'Серверная ошибка при сохранении',
            ),
            [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
            [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
            [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
            [ValidateProfileError.INCORRECT_USER_DATA]: t(
                'Некорректные фамилия и имя',
            ),
        };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    first: value || '',
                }),
            );
        },
        [dispatch],
    );
    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    lastname: value || '',
                }),
            );
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            if (typeof value === 'string' && /^[0-9]*$/.test(value)) {
                dispatch(
                    profileActions.updateProfile({
                        age: Number(value || 0),
                    }),
                );
            }
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value || '',
                }),
            );
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value || '',
                }),
            );
        },
        [dispatch],
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    city: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency,
                }),
            );
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country,
                }),
            );
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={ValidateProfileErrorTranslates[err]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
