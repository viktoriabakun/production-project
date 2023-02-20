import { FC } from 'react';
import cn from 'shared/lib/classNames';
import './styles.scss';

interface ISpinner {
    className?: string;
}

export const Spinner: FC<ISpinner> = ({ className }) => (
    <div className={cn('lds-spinner', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
