import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';
import FallbackErrorImage from '../../assets/img/image-fallback.png';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    if (hasError && !errorFallback) {
        return <img className={className} src={FallbackErrorImage} alt={alt} />;
    }

    return <img className={className} src={src} alt={alt} {...otherProps} />;
});
export default AppImage;
