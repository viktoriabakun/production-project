import {
    ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './styles.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'>;

interface IInput extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input: FC<IInput> = ({
    className, value, onChange, autoFocus, type = 'text', ...props
}) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <input
            ref={ref}
            className={cn(styles.input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            autoFocus={isFocused}
            {...props}
        />

    );
};

export default memo(Input);
