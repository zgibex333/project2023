import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import HomeIcon from '@/shared/assets/icons/home-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import AticlesIcon from '@/shared/assets/icons/articles-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: HomeIcon,
            text: 'Главная страница',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О нас',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}${userData.id}`,
                Icon: ProfileIcon,
                text: 'Profile page',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: AticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
