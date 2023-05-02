import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Avatar from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
    className?: string;
}

const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdminPanelAvailable = isAdmin || isManager;
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <div>
            <Dropdown
                direction="bottomLeft"
                className={classNames('', {}, [className])}
                items={[
                    ...(isAdminPanelAvailable
                        ? [
                              {
                                  content: t('Админка'),
                                  href: RoutePath.admin_panel,
                              },
                          ]
                        : []),
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData.id,
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogout,
                    },
                ]}
                trigger={<Avatar size={30} src={authData.avatar} />}
            />
        </div>
    );
});
export default AvatarDropdown;
