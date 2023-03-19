import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    readonly?: boolean;
}

const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
    readonly,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar && <Avatar src={data.avatar} />}
                </div>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readonly}
                    className={cls.input}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readonly}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
export default ProfileCard;
