import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className } = props;
    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [
                className,
            ])}
        ></div>
    );
};
export default ArticleCodeBlockComponent;
