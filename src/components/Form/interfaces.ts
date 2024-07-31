export interface IFormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    label: string;
    children: React.ReactNode;
}
