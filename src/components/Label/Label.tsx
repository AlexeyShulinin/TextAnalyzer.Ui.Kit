import './Label.css';
import { JSX } from 'react';

interface ILabelProps {
    text: string;
    variant?: 'default' | 'success' | 'warning' | 'danger';
}

export const Label = ({
    text,
    variant = 'default',
    ...props
}: ILabelProps): JSX.Element => {
    return (
        <label className={`label label-${variant}`} {...props}>
            {text}
        </label>
    );
};
