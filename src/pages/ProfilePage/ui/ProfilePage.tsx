import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ProfileRating } from '@/features/profileRating';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams();
    const { t } = useTranslation();

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ProfilePage"
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
});
export default ProfilePage;
