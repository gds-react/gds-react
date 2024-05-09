import type { Meta, StoryObj } from '@storybook/react';
import TaskList from '../../components/taskList/taskList';

const meta = {
    title: 'Components/TaskList',
    component: TaskList,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    argTypes: {},
    args: {
        name: 'example',
        taskList: [{
            status: 'Completed',
            label: 'Company Directors'
        }, {
            status: 'Incomplete',
            label: 'Registered company details'
        }, {
            status: 'Rejected',
            statusColor: 'red',
            label: 'Financial history',
            hint: 'Include 5 years of the company\'s relevant financial information.'
        }]
    },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};