import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/routes';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import HomeIcon from '@/shared/assets/icons/home-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import AticlesIcon from '@/shared/assets/icons/articles-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: HomeIcon,
            text: 'Главная страница',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О нас',
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Profile page',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: AticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
