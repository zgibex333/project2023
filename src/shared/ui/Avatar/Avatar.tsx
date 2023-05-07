import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import FallbackAvatarIcon from '../../assets/icons/avatar-fallback.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt, fallbackInverted = false } = props;
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={FallbackAvatarIcon}
        />
    );

    const fallback = <Skeleton border="50%" width={size} height={size} />;

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
