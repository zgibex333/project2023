import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Dropdown from 'shared/ui/Dropdown/Dropdown';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const onClose = useCallback(() => {
        setAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                <Dropdown
                    direction="bottomLeft"
                    items={[
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                    className={cls.dropdown}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
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
