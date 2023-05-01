import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, memo, ReactNode, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../../../Stack/index';
import Button from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/const';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

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
        direction = 'bottomLeft',
    } = props;
    const postitionOption = mapDirectionClass[direction];
    return (
        <HStack
            gap="4"
            className={classNames('', { [cls.readonly]: readonly }, [])}
        >
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames('', {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={popupCls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [postitionOption])}
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
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
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
