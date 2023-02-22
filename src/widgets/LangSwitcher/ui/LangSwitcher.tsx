import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
export default LangSwitcher;
