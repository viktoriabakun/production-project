import { FC } from "react";
import cn from "shared/lib/classNames";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

interface ILangSwitcher {
    className?: string;
}

export const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => i18n.changeLanguage(i18n.language === "bel" ? "en" : "bel")

    return (
        <Button
            className={cn(styles.langSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t("Language")}
        </Button>
    );
};