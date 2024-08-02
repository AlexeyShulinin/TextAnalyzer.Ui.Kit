import { IButtonProps } from './interfaces.ts';
import './button.css';
import { Label } from '../Label/Label.tsx';

export const Button = ({
    label,
    variant,
    size,
    disabled = false,
    ...props
}: IButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={`button button-${variant} button-${size}`}
            {...props}>
            <Label text={label} />
        </button>
    );
};
