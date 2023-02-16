import { FC, useState } from "react";
import cn from "shared/lib/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./styles.module.scss";

interface ISidebar {
    className?: string;
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => setIsCollapsed((prev) => !prev);

    return (
        <div className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}>

            <button onClick={onToggle}>toggle</button>

            <div className={styles.switchers}>
                <ThemeSwitcher/>
                {/*LangSwitcher*/}
            </div>
        </div>
    );
};
