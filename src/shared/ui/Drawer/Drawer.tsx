import { useDrag } from '@use-gesture/react';
import { a, useSpring, config } from '@react-spring/web';
import { useTheme } from 'app/providers/ThemeProvider';
import { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    isOpen?: boolean;
    children: ReactNode;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const { useSpring, config, a } = Spring;
    const { useDrag } = Gesture;
    const [{ y }, api] = useSpring(() => ({ y: height }));
    const { className, isOpen, children, onClose, lazy } = props;
    const { close, isOpening, isClosing, isMounted } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    // const close = (velocity = 0) => {
    //     api.start({
    //         y: height,
    //         immediate: false,
    //         config: {
    //             ...config.stiff,
    //             velocity,
    //         },
    //         onResolve: onClose,
    //     });
    // };

    const bind = useDrag(
        ({ last, velocity, direction, movement, cancel }) => {},
    );

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.closed]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});

const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();
    if (!isLoaded) {
        return null;
    }
    return <DrawerContent {...props} />;
});

export default Drawer;
