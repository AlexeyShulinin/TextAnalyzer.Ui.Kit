import './Button.css';
import { Label } from '../Label/Label.tsx';
import { JSX } from 'react';

interface IButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'large';
    type?: 'button' | 'submit';
}

export const Button = ({
    label,
    variant,
    size,
    disabled = false,
    ...props
}: IButtonProps): JSX.Element => {
    return (
        <button
            disabled={disabled}
            className={`button button-${variant} button-${size}`}
            {...props}>
            <Label text={label} />
        </button>
    );
};
