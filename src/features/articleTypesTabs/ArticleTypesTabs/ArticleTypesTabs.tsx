import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs, TabItem } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypesTabsProps {
    className?: string;
    value: ArticleType;
    onChangeArticleType: (type: ArticleType) => void;
}

const ArticleTypesTabs = memo((props: ArticleTypesTabsProps) => {
    const { className, value, onChangeArticleType } = props;
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t],
    );
    const onChangeType = useCallback(
        (tab: TabItem) => {
            onChangeArticleType(tab.value as ArticleType);
        },
        [onChangeArticleType],
    );
    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
});
export default ArticleTypesTabs;
