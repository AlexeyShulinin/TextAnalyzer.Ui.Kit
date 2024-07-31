import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { useState } from 'react';

const meta = {
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (_, { args }) => {
            const [value, setValue] = useState<number>(0);

            function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
                setValue(Number(e.target.value));
            }

            return (
                <Select
                    value={value}
                    onChange={handleChange}
                    options={args.options}
                />
            );
        },
    ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            { id: 1, name: 'first' },
            { id: 2, name: 'second' },
            { id: 3, name: 'third' },
        ],
        value: 1,
        onChange: () => {},
    },
};
