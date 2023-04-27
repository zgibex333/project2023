import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, memo, ReactNode, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import Button from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        defaultValue,
        onChange,
        value,
        readonly,
        label,
        direction = 'bottom',
    } = props;

    return (
        <HStack
            gap="4"
            className={classNames('', { [cls.readonly]: readonly }, [])}
        >
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [cls[direction]])}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.option,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
});

export default ListBox;
