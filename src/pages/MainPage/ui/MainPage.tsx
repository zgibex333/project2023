import { BugButton } from 'app/providers/ErrorBoundry';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = memo(() => {
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
});

export default MainPage;
