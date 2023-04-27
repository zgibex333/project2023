import { BugButton } from 'app/providers/ErrorBoundry';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'shared/ui/Dropdown/Dropdown';
import ListBox from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage: FC = memo(() => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Page>
            {t('Главная страница')}
            <BugButton />
        </Page>
    );
});

export default MainPage;
