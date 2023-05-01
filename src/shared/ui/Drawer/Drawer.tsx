import { useTheme } from 'app/providers/ThemeProvider';
import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    isOpen?: boolean;
    children: ReactNode;
    onClose?: () => void;
}

const Drawer = memo((props: DrawerProps) => {
    const { className, isOpen, children, onClose } = props;
    const { theme } = useTheme();
    return (
        <Portal>
            <div
                className={classNames(
                    cls.Drawer,
                    {
                        [cls.opened]: isOpen,
                    },
                    [className],
                )}
            >
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
export default Drawer;
