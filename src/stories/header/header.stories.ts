import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../components/header/header';

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  argTypes: {
    // All stories expect a title arg
    title: {
      control: 'text',
      description: 'Optional title of the header',
    },
  },
  args: {
    title: 'Title'
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title'
  },
};

export const HeaderWithTitle: Story = {
  args: {
    title: 'Regulatory Connect'
  },
};