import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/const/routes';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import Text, { TextTheme } from '@/shared/ui/Text/Text';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onClose = useCallback(() => {
        setAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={`${'App'}`}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    className={cls.link}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onClose} />
                )}
            </div>
        </header>
    );
});
export default Navbar;
