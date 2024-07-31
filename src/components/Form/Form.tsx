import { IFormProps } from './interfaces.ts';
import { Label } from '../Label/Label.tsx';
import './form.css';

export const Form = ({ onSubmit, label, children, ...props }: IFormProps) => {
    return (
        <form onSubmit={onSubmit} {...props} className="form-container">
            <div>
                <div>
                    <Label text={label} />
                </div>
                <div>{children}</div>
            </div>
        </form>
    );
};
