export interface IInputProps {
    value: string;
    type?: 'text' | 'file';
    disabled?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    onClick?: () => void;
}
