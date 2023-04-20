import { FC, Suspense } from 'react';
import cn from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner';
import { LoginFormLazy } from '../LoginForm/index.lazy';

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

        <Suspense fallback={<Spinner />}>
            <LoginFormLazy />
        </Suspense>
    </Modal>
);
