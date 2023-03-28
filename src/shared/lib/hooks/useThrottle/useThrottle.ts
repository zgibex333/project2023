import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeoutIdRef = useRef<null | ReturnType<typeof setTimeout>>(null);

    useEffect(
        () => () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        },
        [],
    );

    return useCallback(
        (...args) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                timeoutIdRef.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
