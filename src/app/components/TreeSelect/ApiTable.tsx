import React from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { RecordTable } from '@akamuinsaner/mr-components';

export default function ApiTable() {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{ marginTop: '80px' }}
        >
            <Typography
                variant='h4'
                fontWeight="bold"
            >API</Typography>
            <Typography>
                See the documentation below for a complete reference
                to all of the props and classes available to the components
                mentioned here.
            </Typography>
            <Link href="https://mui.com/material-ui/react-text-field/">{`<TextField />`}</Link>
            <Typography
                variant='h6'
                fontWeight="bold"
            >TreeSelect props</Typography>
            <RecordTable
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f', whiteSpace: 'nowrap' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'allowClear',
                        description: 'show clear icon when options selected and hovering at the same time',
                        datatype: 'boolean',
                        default: 'false'
                    },
                    {
                        property: 'checkable',
                        description: 'realise multiple select function through Checkbox',
                        datatype: 'boolean',
                        default: 'false'
                    },
                    {
                        property: 'expandAll',
                        description: 'default open all the tree leafs',
                        datatype: 'boolean',
                        default: 'false',
                    },
                    {
                        property: 'expandKeys',
                        description: 'default open specific tree leafs',
                        datatype: 'Array<number | string>',
                        default: '-',
                    },
                    {
                        property: 'loadData',
                        description: 'allow loading data asychorously from remote',
                        datatype: <span>(o: <Link href={`#treeData`}>option</Link>) =&gt; Promise&lt;<Link href={`#treeData`}>option</Link>[]&gt;</span>,
                        default: '-',
                    },
                    {
                        property: 'maxTagCount',
                        description: 'limit the tags show when select multiple values,if responsive, the number of show tags changes with the changing of container width',
                        datatype: `number | 'responsive'`,
                        default: '-',
                    },
                    {
                        property: 'multiple',
                        description: 'allow multiple select',
                        datatype: `boolean`,
                        default: 'false',
                    },
                    {
                        property: 'onChange',
                        description: 'callback fired when select data',
                        datatype: <span>(value: any) =&gt; void</span>,
                        default: '-',
                    },
                    {
                        property: 'options',
                        description: 'data of selected options',
                        datatype: <span><Link href={`#treeData`}>option</Link>[]</span>,
                        default: '-',
                    },
                    {
                        property: 'placement',
                        description: 'the placement of Popper box',
                        datatype: 'PopperPlacementType',
                        default: 'bottom-left',
                    },
                    {
                        property: 'popperClassName',
                        description: 'custom classNames of Popper box',
                        datatype: 'string',
                        default: '-',
                    },
                    {
                        property: 'popperStyle',
                        description: 'custom styles of Popper box',
                        datatype: 'React.CSSProperties',
                        default: '-',
                    },
                    {
                        property: 'search',
                        description: 'allow filtering options through user input',
                        datatype: 'boolean',
                        default: 'false',
                    },
                    {
                        property: 'value',
                        description: 'to use TreeSelect as controlled component',
                        datatype: 'any',
                        default: '-',
                    },
                ]}
                pagination={false}
            />
            <Typography
                id="treeData"
                variant='h6'
                fontWeight="bold"
            >Tree data</Typography>
            <RecordTable
                columns={[
                    { key: 'property', title: 'Property' },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype' },
                    { key: 'default', title: 'Default' },
                ]}
                dataSource={[
                    {
                        property: 'id',
                        description: 'filter by this property',
                        datatype: 'string | number',
                        default: '-',
                    },
                    {
                        property: 'name',
                        description: 'content showed in treeNode',
                        datatype: 'React.ReactNode',
                        default: '-',
                    },
                    {
                        property: 'children',
                        description: '',
                        datatype: <span><Link href={`#treeData`}>option</Link>[]</span>,
                        default: '-',
                    },
                    {
                        property: 'parentId',
                        description: '',
                        datatype: 'string | number',
                        default: '-',
                    },
                ]}
                pagination={false}
            />
        </Stack>
    )
}