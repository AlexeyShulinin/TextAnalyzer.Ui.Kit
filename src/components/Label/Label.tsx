import { ILabelProps } from './interfaces.ts';
import './label.css';

export const Label = ({ text, variant = 'default', ...props }: ILabelProps) => {
    return (
        <label className={`label label-${variant}`} {...props}>
            {text}
        </label>
    );
};
