import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback,
}: UseInfiniteScrollProps) {
    useEffect(() => {
        let observer: IntersectionObserver;

        const trigger = triggerRef.current;
        const wrapper = wrapperRef.current;

        if (callback) {
            const options: IntersectionObserverInit = {
                root: wrapper,
                rootMargin: '20px 20px 20px 45px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    console.log('inter');

                    callback();
                }
            }, options);

            observer.observe(trigger);
        }

        return () => {
            if (observer && trigger) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(trigger);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
