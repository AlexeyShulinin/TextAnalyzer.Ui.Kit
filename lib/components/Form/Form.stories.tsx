import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import { FormEvent } from 'react';
import { Button } from '../Button/Button.tsx';

const meta = {
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        () => {
            return (
                <Form
                    label="Simple submit form"
                    onSubmit={(event: FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        console.log(event);
                    }}>
                    <>
                        <Button
                            label="Submit"
                            type="submit"
                            variant="primary"
                            size="large"
                        />
                    </>
                </Form>
            );
        },
    ],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(event);
        },
        label: 'label',
        children: <Button label="Submit" variant="primary" size="large" />,
    },
};
