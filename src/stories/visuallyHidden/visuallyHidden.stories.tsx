import type { Meta, StoryObj } from '@storybook/react';
import VisuallyHidden from '../../components/visuallyHidden/visuallyHidden';

const meta = {
    title: 'Components/VisuallyHidden',
    component: VisuallyHidden,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    argTypes: {},
    args: {
        children: 'A sample visually hidden text'
    },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'A sample visually hidden text'
    },
};