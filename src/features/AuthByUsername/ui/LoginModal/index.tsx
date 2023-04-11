import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm';

interface ILoginModal {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<ILoginModal> = ({ className, isOpen, onClose }) => (
    <Modal
        className={cn('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        isLazy
    >
        <LoginForm />
    </Modal>
);
