import { ITextAreaProps } from './interfaces.ts';
import './textArea.css';

export const TextArea = ({ rows = 5, cols = 40, ...props }: ITextAreaProps) => {
    return (
        <textarea rows={rows} cols={cols} className="text-area" {...props} />
    );
};
