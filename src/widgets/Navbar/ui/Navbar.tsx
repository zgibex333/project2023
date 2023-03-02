import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    className={cls.link}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    <span>*****</span>
                </Modal>
            </div>
        </div>
    );
};
export default Navbar;
