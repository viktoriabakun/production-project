import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ILangSwitcher {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<ILangSwitcher> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => i18n.changeLanguage(i18n.language === 'bel' ? 'en' : 'bel');

    return (
        <Button
            className={cn('', {}, [className])}
            onClick={toggleLang}
        >
            {t(short ? 'ShortLanguage' : 'Language')}
        </Button>
    );
};
