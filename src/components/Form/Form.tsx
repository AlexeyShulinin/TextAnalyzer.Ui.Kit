import { Label } from '../Label/Label.tsx';
import './Form.css';
import { JSX } from 'react';

interface IFormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    label: string;
    children: React.ReactNode;
}

export const Form = ({
    onSubmit,
    label,
    children,
    ...props
}: IFormProps): JSX.Element => {
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
