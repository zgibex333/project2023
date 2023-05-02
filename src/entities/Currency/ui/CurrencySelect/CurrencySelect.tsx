import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import Select from '@/shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
];

const CurrencySelect = memo(
    ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
        const { t } = useTranslation();
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );
        return (
            <ListBox
                className={className}
                items={options}
                value={value}
                defaultValue=""
                onChange={onChangeHandler}
                readonly={readOnly}
                label={t('Укажите валюту')}
            />
        );
    },
);
export default CurrencySelect;
