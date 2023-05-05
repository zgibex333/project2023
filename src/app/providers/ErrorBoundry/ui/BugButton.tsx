import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

// компонент для тестирования
const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const throwError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return <Button onClick={throwError}>{t('Выбросить ошибку')}</Button>;
};
export default BugButton;
