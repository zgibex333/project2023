import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import AppLink from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottomRight' } = props;
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, [cls[direction]])}
                as="ul"
            >
                {items &&
                    items.map((item) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                disabled={item.disabled}
                                type="button"
                                onClick={item.onClick}
                                className={classNames(
                                    cls.item,
                                    { [cls.active]: active },
                                    [],
                                )}
                            >
                                {item.content}
                            </button>
                        );
                        if (item.href) {
                            return (
                                <Menu.Item
                                    as={AppLink}
                                    to={item.href}
                                    disabled={item.disabled}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }
                        return (
                            <Menu.Item as={Fragment} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    })}
            </Menu.Items>
        </Menu>
    );
});
export default Dropdown;
