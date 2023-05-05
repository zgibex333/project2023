import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const appDiv = document.getElementById('app');
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
