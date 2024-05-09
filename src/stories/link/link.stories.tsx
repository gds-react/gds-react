import type { Meta, StoryObj } from '@storybook/react';
import Link from '../../components/link/link';

const meta = {
    title: 'Components/Link',
    component: Link,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    argTypes: {},
    args: {
        text: 'Link',
        href: '#'
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Default Link',
        href: '#'
    },
};

export const LinkWhichOpensInANewTab: Story = {
    args: {
        text: 'Link which opens in a new tab',
        href: '#',
        opensInNewTab: true
    },
};

export const LinkWithNoVisitedState: Story = {
    args: {
        text: 'Link with no visited state',
        href: '#',
        noVisitedState: true
    },
};

export const LinkWithInverseColors: Story = {
    args: {
        text: 'Link with Inverse Colors',
        href: '#',
        isInverse: true
    },
    parameters: {
        backgrounds: { default: 'dark' },
    }
};

export const LinkWithNoUnderline: Story = {
    args: {
        text: 'Link with no underline',
        href: '#',
        noUnderline: true
    },
};

export const LinkWithVisuallyHiddenText: Story = {
    args: {
        text: 'Link',
        href: '#',
        visuallyHiddenText: ' with visually hidden text'
    },
};

export const LinkWithOnClickEvent: Story = {
    args: {
        text: 'Link with Onclick event',
        href: '#',
        onClick: () => {
            alert('Link clicked');
        }
    },
};