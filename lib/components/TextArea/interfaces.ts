import { ChangeEventHandler } from 'react';

export interface ITextAreaProps {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    rows?: number;
    cols?: number;
}
