import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import AppLink from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/const';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

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
    const postitionOption = mapDirectionClass[direction];

    return (
        <Menu
            as="div"
            className={classNames('', {}, [className, popupCls.popup])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, [postitionOption])}
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
                                    { [popupCls.active]: active },
                                    [],
                                )}
                            >
                                {item.content}
                            </button>
                        );
                        if (item.href) {
                            return (
                                <Menu.Item
                                    key={`key${Math.random()}`}
                                    as={AppLink}
                                    to={item.href}
                                    disabled={item.disabled}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }
                        return (
                            <Menu.Item
                                key={`key${Math.random()}`}
                                as={Fragment}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    })}
            </Menu.Items>
        </Menu>
    );
});
export default Dropdown;
