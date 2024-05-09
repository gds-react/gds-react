import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../index';
import { TableProps } from '../../components/table/table.types';

const meta = {
    title: 'Components/Table',
    component: Table,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    argTypes: {
        // All stories expect a title arg
        variant: {
            control: 'text',
            description: 'Optional variant of the table which helps to choose between the standard Table and the enhanced CustomTable based on the requirements.',
        },
        caption: {
            control: 'text',
            description: 'Optional string to set the table caption.',
        },
        head: {
            description: 'Optional ReactNode to define the table header content.',
        },
        body: {
            description: 'Optional ReactNode to define the table body content.',
        },
        children: {
            description: 'Optional ReactNode to define the table body content (for backward compatibility).',
        },
    },
    args: {
        variant: '',
        keys: [],
        headings: {},
        data: []
    },
    decorators: [
        // ({ body, data, headings, keys }) => {
        //     const [isDefault, setIsDefault] = useState(true);
        //     // const [body, setBody] = useState(<></>);
        //     // const [data, setdata] = useState([]);
        //     // const [headings, setHeadings] = useState({});
        //     // const [keys, setKeys] = useState([]);
        //     const [bodyData, setBodyData] = useState([
        //         { id: 1, value1: "Value 1", value2: "Value 2", value3: "Value 3" },
        //         { id: 2, value1: "Value 4", value2: "Value 5", value3: "Value 6" },
        //         { id: 3, value1: "Value 7", value2: "Value 8", value3: "Value 9" }
        //     ]);

        //     const [sortConfig, setSortConfig] = useState({
        //         key: null,
        //         direction: 'ascending'
        //     });

        //     const handleSort = (key) => {
        //         setSortConfig({
        //             key,
        //             direction: sortConfig.direction === "ascending" ? "descending" : "ascending"
        //         });

        //         setBodyData(() => {
        //             return [...bodyData].sort((a, b) => {
        //                 const valueA = a[key] || ""; // Provide default value if undefined
        //                 const valueB = b[key] || ""; // Provide default value if undefined

        //                 if (sortConfig.direction === "ascending") {
        //                     return valueA.localeCompare(valueB);
        //                 } else {
        //                     return valueB.localeCompare(valueA);
        //                 }
        //             });
        //         });
        //     };

        //     console.log('---------------', data);

        //     return (
        //         <React.Fragment>
        //             {isDefault ? <Table data={data} headings={headings} keys={keys} />
        //                 : <Table
        //                     variant={'CustomTable'}
        //                     caption={'Custom Sortable table caption'}
        //                     head={<Table.Row>
        //                         <Table.CellHeader scope="col" key="value1" onClick={() => handleSort("value1")} style={{ cursor: 'pointer' }}>
        //                             <a className="govuk-link">Header 1{" "}
        //                                 {sortConfig.key === "value1" && (
        //                                     <span>
        //                                         {sortConfig.direction === "ascending" ? "▲" : "▼"}
        //                                     </span>
        //                                 )}
        //                             </a>
        //                         </Table.CellHeader>
        //                         <Table.CellHeader scope="col" key="value2" onClick={() => handleSort("value2")} style={{ cursor: 'pointer' }}>
        //                             <a className="govuk-link">Header 2{" "}
        //                                 {sortConfig.key === "value2" && (
        //                                     <span>
        //                                         {sortConfig.direction === "ascending" ? "▲" : "▼"}
        //                                     </span>
        //                                 )}
        //                             </a>
        //                         </Table.CellHeader>
        //                         <Table.CellHeader scope="col" key="value3" onClick={() => handleSort("value3")} style={{ cursor: 'pointer' }}>
        //                             <a className="govuk-link">Header 3{" "}
        //                                 {sortConfig.key === "value3" && (
        //                                     <span>
        //                                         {sortConfig.direction === "ascending" ? "▲" : "▼"}
        //                                     </span>
        //                                 )}
        //                             </a>
        //                         </Table.CellHeader>
        //                     </Table.Row>}
        //                     body={<>
        //                         {bodyData.map((item) => (
        //                             <Table.Row key={item.id}>
        //                                 <Table.CellHeader scope="row"><a className="govuk-link">{item.value1}</a></Table.CellHeader>
        //                                 <Table.Cell>{item.value2}</Table.Cell>
        //                                 <Table.Cell>{item.value3}</Table.Cell>
        //                             </Table.Row>
        //                         ))}
        //                     </>} data={[]} headings={undefined} keys={[]} />
        //             }
        //         </React.Fragment>
        //     );
        // }
    ]
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: TableProps) => <Table {...args} />;
export const Default = Template.bind({});

// define Controls
Default.args = {
    variant: '',
    body: [],
    keys: ['name', 'qty', 'cost'],
    headings: {
        cost: 'Price',
        qty: 'Quantity',
        name: 'Name'
    },
    data: [
        {
            cost: '£7.99',
            qty: '4',
            name: 'Blu-ray disk'
        },
        {
            cost: '£0.85',
            qty: '10',
            name: 'Pencil'
        },
        {
            cost: '£21.45',
            qty: '1',
            name: 'Text book'
        },
    ]
};

// export const Default: Story = {
//     args: {
//         variant: '',
//         body: [],
//         keys: ['name', 'qty', 'cost'],
//         headings: {
//             cost: 'Price',
//             qty: 'Quantity',
//             name: 'Name'
//         },
//         data: [
//             {
//                 cost: '£7.99',
//                 qty: '4',
//                 name: 'Blu-ray disk'
//             },
//             {
//                 cost: '£0.85',
//                 qty: '10',
//                 name: 'Pencil'
//             },
//             {
//                 cost: '£21.45',
//                 qty: '1',
//                 name: 'Text book'
//             },
//         ]
//     },
// };

export const SimpleTable: Story = {
    args: {
        variant: '',
        body: [],
        keys: ['name', 'qty', 'cost'],
        headings: {
            cost: 'Price',
            qty: 'Quantity',
            name: 'Name'
        },
        data: [
            {
                cost: '£7.99',
                qty: '4',
                name: 'Blu-ray disk'
            },
            {
                cost: '£0.85',
                qty: '10',
                name: 'Pencil'
            },
            {
                cost: '£21.45',
                qty: '1',
                name: 'Text book'
            },
        ]
    },
};

export const CustomTable: Story = {
    args: {
        variant: 'CustomTable',
        caption: 'Custom table caption',
        head: (<Table.Row>
            <Table.CellHeader scope='col'>Header 1</Table.CellHeader>
            <Table.CellHeader scope='col'>Header 2</Table.CellHeader>
            <Table.CellHeader scope='col'>Header 3</Table.CellHeader>
        </Table.Row>
        ),
        body: (<>
            <Table.Row>
                <Table.CellHeader scope='row'>CellHeader 1</Table.CellHeader>
                <Table.Cell>Cell 11</Table.Cell>
                <Table.Cell>Cell 12</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.CellHeader scope='row'>CellHeader 2</Table.CellHeader>
                <Table.Cell>Cell 21</Table.Cell>
                <Table.Cell>Cell 22</Table.Cell>
            </Table.Row>
        </>)
    },
};