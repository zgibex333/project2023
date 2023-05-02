import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import Button, { ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import Icon from '../Icon/Icon';

interface CodeProps {
    className?: string;
    text: string;
}

const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
export default Code;
