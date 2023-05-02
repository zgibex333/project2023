import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Skeleton from '@/shared/ui/Skeleton/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { isError, isLoading, data } = useGetNotificationsQuery(undefined, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                max
                gap="16"
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
export default NotificationList;
