import type { Meta, StoryObj } from '@storybook/react';
import Tag from '../../components/tag/tag';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    argTypes: {},
    args: {
        text: 'Incomplete'
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const TagWithDifferentColor: Story = {
    args: {
        text: 'Rejected',
        classModifiers: 'red'
    },
};