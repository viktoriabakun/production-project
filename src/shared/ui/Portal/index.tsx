import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
    // what will change place in the DOM
    children: ReactNode;
    // where to add children
    element?: HTMLElement;
}

export const Portal: FC<IPortal> = (props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
