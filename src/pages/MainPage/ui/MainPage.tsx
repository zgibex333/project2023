import { BugButton } from 'app/providers/ErrorBoundry';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
};

export default MainPage;
