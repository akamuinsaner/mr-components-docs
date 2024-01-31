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
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'blockNodes',
                        description: 'Tree nodes show in block style',
                        datatype: 'boolean',
                        default: 'false'
                    },
                    {
                        property: 'checkable',
                        description: 'visibility of checkbox',
                        datatype: 'boolean',
                        default: 'false'
                    },
                    {
                        property: 'checkedKeys',
                        description: 'checked tree nodes used in control mode',
                        datatype: 'Array<number | string>',
                        default: '-'
                    },
                    {
                        property: 'checkWithRelation',
                        description: 'when click a checkbox, also checked its children and parents',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'className',
                        description: 'classNames to control the style of container',
                        datatype: 'string',
                        default: '-'
                    },
                    {
                        property: 'defaultCheckedAll',
                        description: 'default checked all tree nodes',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'defaultCheckedKeys',
                        description: 'default checked tree nodes',
                        datatype: 'Array<number | string>',
                        default: '-'
                    },
                    {
                        property: 'defaultExpandAll',
                        description: 'default open all the tree leafs',
                        datatype: 'boolean',
                        default: '-',
                    },
                    {
                        property: 'defaultExpandedKeys',
                        description: 'default open specific tree leafs',
                        datatype: 'Array<number | string>',
                        default: '-',
                    },
                    {
                        property: 'defaultSelectAll',
                        description: 'default select all tree nodes',
                        datatype: 'boolean',
                        default: '-',
                    },
                    {
                        property: 'defaultSelectedKeys',
                        description: 'default selected tree nodes',
                        datatype: 'Array<number | string>',
                        default: '-',
                    },
                    {
                        property: 'draggable',
                        description: 'tell whether tree nodes are draggable',
                        datatype: 'boolean',
                        default: 'false',
                    },
                    {
                        property: 'expandedKeys',
                        description: 'open specific tree leafs used in control mode',
                        datatype: 'Array<number | string>',
                        default: '-',
                    },
                    {
                        property: 'loadData',
                        description: 'allow loading data asychorously from remote',
                        datatype: <span>(o: <Link href={`#treeData`}>option</Link>) =&gt; any</span>,
                        default: '-',
                    },
                    {
                        property: 'onCheck',
                        description: 'fired when tree nodes are checked',
                        datatype: `(checkedKeys: Array<number | string>, checked: boolean, node: TreeData) => void`,
                        default: '-',
                    },
                    {
                        property: 'onDrop',
                        description: 'fired when tree nodes are dropped',
                        datatype: `(active: TreeData, over: TreeData) => void`,
                        default: '-',
                    },
                    {
                        property: 'onExpand',
                        description: 'fired when tree nodes open change',
                        datatype: `(expandedKeys: Array<number | string>, expanded: boolean, node: TreeData) => void`,
                        default: '-',
                    },
                    {
                        property: 'onSelect',
                        description: 'fired when tree nodes selection change',
                        datatype: `(selectedKeys: Array<number | string>, selected: boolean, node: TreeData) => void`,
                        default: '-',
                    },
                    {
                        property: 'selectedKeys',
                        description: 'selected keys when in control mode',
                        datatype: `Array<number | string>`,
                        default: '-',
                    },
                    {
                        property: 'showLine',
                        description: 'show the lines between tree nodes in the same level',
                        datatype: 'boolean',
                        default: '-',
                    },
                    {
                        property: 'switchIcon',
                        description: 'switch icon',
                        datatype: 'React.ReactNode | ((node: TreeData, expand: boolean) => React.ReactNode)',
                        default: '-',
                    },
                    {
                        property: '*treeData',
                        description: 'data showed as tree nodes',
                        datatype: 'TreeData[]',
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