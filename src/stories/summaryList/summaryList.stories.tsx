import React, { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Link, SummaryList, Tag } from '../../index';

const handleClick = () => {
    alert('Change clicked');
}

const meta = {
    title: 'Components/SummaryList',
    component: SummaryList,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    argTypes: {},
    args: {
        items: [
            {
                name: <Fragment>
                    Name
                    <br />
                    <Link text={'Why is it required?'} href={''} onClick={handleClick} visuallyHiddenText={' Name'} />
                </Fragment>,
                value: "Sarah Philips",
                actions: [<Link text={'Change'} href={''} onClick={handleClick} visuallyHiddenText={' Name'} />],
            },
            {
                name: "Date of birth",
                value: "5 January 1978",
                actions: [<Link text={'Change'} href={''} onClick={handleClick} visuallyHiddenText={' Date of birth'} />]
            },
            {
                name: "Address",
                value: (
                    <Fragment>
                        72 Guild Street
                        <br />
                        London
                        <br />
                        SE23 6FH
                    </Fragment>
                ),
                actions: [<Link text={'Change'} href={''} onClick={handleClick} visuallyHiddenText={' Address'} />]
            },
            {
                name: "Contact details",
                value: <Tag text={'Answer required'} classModifiers={'red'} />
                ,
                actions: [<Link text={'Answer'} href={''} onClick={handleClick} visuallyHiddenText={' Contact details'} />]
            },
        ]
    },
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};