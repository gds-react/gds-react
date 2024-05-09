import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../components/checkbox/checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    args: {
        options: [
            {
                title: 'Option 1',
                value: 'option1'
            }
        ]
    },
    argTypes: {
        options: {
            control: 'object',
            description: 'Options to render the checkboxes',
        }
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            {
                title: 'Option 1',
                value: 'option1'
            }
        ]
    },
};