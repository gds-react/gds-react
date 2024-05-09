import type { Meta, StoryObj } from '@storybook/react';
import CheckboxGroup from '../../components/checkboxGroup/checkboxGroup';

const meta = {
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    args: {
        text: 'Which types of waste do you transport?',
        hintText: 'Select all that apply.',
        options: [
            {
                title: 'Waste from animal carcasses',
                value: 'carcasses'
            },
            {
                title: 'Waste from mines or quarries',
                value: 'mines'
            },
            {
                title: 'Farm or agricultural waste',
                value: 'farm'
            }
        ]
    },
    argTypes: {
        text: {
            control: 'text',
            description: 'Optional heading of the checkboxes',
        },
        hintText: {
            control: 'text',
            description: 'Optional hint text of the checkboxes',
        },
        options: {
            control: 'object',
            description: 'Options to render the checkboxes',
        }
    },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Which types of waste do you transport?',
        hintText: 'Select all that apply.',
        options: [
            {
                title: 'Waste from animal carcasses',
                value: 'carcasses'
            },
            {
                title: 'Waste from mines or quarries',
                value: 'mines'
            },
            {
                title: 'Farm or agricultural waste',
                value: 'farm'
            }
        ]
    },
};