import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface INotFoundPage {
    className?: string;
}

const NotFoundPage: FC<INotFoundPage> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={cn(styles.notFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};

export default NotFoundPage;
