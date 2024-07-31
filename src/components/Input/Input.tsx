import { IInputProps } from './interfaces.ts';
import './input.css';
import '../Button/button.css';
import classNames from 'classnames';

export const Input = ({ type = 'text', ...props }: IInputProps) => {
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
