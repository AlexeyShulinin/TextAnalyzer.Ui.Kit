import { ISelectProps } from './interfaces.ts';
import './select.css';

export const Select = ({
    options,
    value,
    onChange,
    ...props
}: ISelectProps) => {
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
