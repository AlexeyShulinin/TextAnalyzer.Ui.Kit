import { IFormProps } from './interfaces.ts';
import { Label } from '../Label/Label.tsx';
import './form.css';

export const Form = ({ onSubmit, label, children, ...props }: IFormProps) => {
    return (
        <div className="form-container">
            <header>
                <h2 className="header">
                    <Label text={label} />
                </h2>
            </header>
            <form onSubmit={onSubmit} {...props}>
                <div>{children}</div>
            </form>
        </div>
    );
};
