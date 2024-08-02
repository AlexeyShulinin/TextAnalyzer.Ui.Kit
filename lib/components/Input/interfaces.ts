import { FormEvent } from 'react';

export interface IInputProps {
    value: string;
    onChange?: (event: FormEvent<HTMLInputElement>) => void;
    type?: 'text' | 'file';
    disabled?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    onClick?: () => void;
    accept?: string;
}
