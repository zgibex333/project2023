import { memo } from 'react';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import VStack from 'shared/ui/Stack/VStack/VStack';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams();
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});
export default ProfilePage;
