import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import GridIcon from 'shared/assets/icons/grid-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        if (onViewClick) {
            onViewClick(newView);
        }
    };

    return (
        <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
export default ArticleViewSwitcher;
