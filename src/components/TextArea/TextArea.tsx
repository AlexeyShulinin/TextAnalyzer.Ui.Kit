import './TextArea.css';
import { JSX, ChangeEventHandler } from 'react';

interface ITextAreaProps {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    rows?: number;
    cols?: number;
}

export const TextArea = ({
    rows = 5,
    cols = 40,
    ...props
}: ITextAreaProps): JSX.Element => {
    return (
        <textarea rows={rows} cols={cols} className="text-area" {...props} />
    );
};
