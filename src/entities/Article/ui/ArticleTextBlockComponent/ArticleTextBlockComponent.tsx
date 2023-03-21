import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className } = props;
    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [
                className,
            ])}
        ></div>
    );
};
export default ArticleTextBlockComponent;
