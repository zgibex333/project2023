import { memo, ReactNode } from 'react';
import { Popover as PopoverComponent } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/const';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

const Popover = memo((props: PopoverProps) => {
    const { className, direction = 'bottomRight', trigger, children } = props;
    const postitionOption = mapDirectionClass[direction];

    return (
        <PopoverComponent
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <PopoverComponent.Button className={popupCls.trigger}>
                {trigger}
            </PopoverComponent.Button>

            <PopoverComponent.Panel
                // unmount={false}
                className={classNames(cls.panel, {}, [postitionOption])}
            >
                {children}
            </PopoverComponent.Panel>
        </PopoverComponent>
    );
});
export default Popover;
