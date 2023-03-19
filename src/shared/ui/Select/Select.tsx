import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

const Select = memo(
    ({ className, label, options, value, onChange, readOnly }: SelectProps) => {
        const mods: Mods = {
            [cls.readOnly]: readOnly,
        };

        const optionsList = useMemo(
            () =>
                options?.map((optn) => (
                    <option
                        className={cls.option}
                        key={optn.value}
                        value={optn.value}
                    >
                        {optn.content}
                    </option>
                )),
            [options],
        );

        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) onChange(e.target.value);
        };

        return (
            <div className={classNames(cls.Wrapper, mods, [className])}>
                {label && <span className={cls.label}>{`${label}>`}</span>}
                <select
                    disabled={readOnly}
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                >
                    {optionsList}
                </select>
            </div>
        );
    },
);
export default Select;
