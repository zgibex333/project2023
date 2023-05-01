import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export const useModal = ({
    animationDelay,
    isOpen,
    onClose,
}: UseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    ) as MutableRefObject<ReturnType<typeof setTimeout>>;
    const timeRef2 = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    ) as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timeRef2.current = setTimeout(() => {
                setIsOpening(true);
            }, animationDelay);
        }
        return () => {
            clearTimeout(timeRef2.current);
            setIsOpening(false);
        };
    }, [animationDelay, isOpen]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent): any => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isOpening,
        close,
        isMounted,
    };
};
