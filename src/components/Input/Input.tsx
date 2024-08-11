import './Input.css';
import classNames from 'classnames';
import { ChangeEventHandler, JSX } from 'react';

interface IInputProps {
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: 'text' | 'file';
    disabled?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    onClick?: () => void;
    accept?: string;
}

export const Input = ({
    type = 'text',
    ...props
}: IInputProps): JSX.Element => {
    return (
        <input
            type={type}
            className={classNames('input', {
                'input-text': type === 'text',
            })}
            {...props}
        />
    );
};
