import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comments');
    return (
        <div className={classNames('cls.CommentList', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
});
export default CommentList;
