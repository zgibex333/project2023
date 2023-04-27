import { BugButton } from 'app/providers/ErrorBoundry';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
            <HStack>
                <ListBox
                    defaultValue="111"
                    items={[
                        { value: '1', content: '1', disabled: false },
                        { value: '2', content: '2', disabled: true },
                        { value: '3', content: '3', disabled: false },
                    ]}
                    onChange={(value: string) => {}}
                />
            </HStack>
        </Page>
    );
});

export default MainPage;
