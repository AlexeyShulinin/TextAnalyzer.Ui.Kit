import './Select.css';
import { IBaseItem } from '../../common/IBaseItem.ts';
import { ChangeEvent, JSX } from 'react';

interface ISelectProps {
    options: IBaseItem[];
    value: number;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
    options,
    value,
    onChange,
    ...props
}: ISelectProps): JSX.Element => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="select-container"
            {...props}>
            {options.map((optionItem) => (
                <option
                    key={optionItem.id}
                    value={optionItem.id}
                    className="option">
                    {optionItem.name}
                </option>
            ))}
        </select>
    );
};
