import React, {
    MouseEvent,
    useEffect,
    useRef,
    useState,
    useCallback,
    MutableRefObject,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 100;

const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    ) as MutableRefObject<ReturnType<typeof setTimeout>>;
    const timeRef2 = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    ) as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent): any => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timeRef2.current = setTimeout(() => {
                setIsOpening(true);
            }, ANIMATION_DELAY);
        }
        return () => {
            clearTimeout(timeRef2.current);
            setIsOpening(false);
        };
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
export default Modal;
