import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { fn } from '@storybook/test';

const meta = {
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'value',
        onClick: fn(),
    },
};
