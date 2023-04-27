import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import ListBox from 'shared/ui/ListBox/ListBox';
import Select from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
];

const CountrySelect = memo(
    ({ className, value, onChange, readOnly }: CountrySelectProps) => {
        const { t } = useTranslation();
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
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
                label={t('Укажите страну')}
                direction="topRight"
            />
        );
    },
);
export default CountrySelect;
