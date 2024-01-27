import React from 'react';
import { RecordTable } from '@akamuinsaner/mr-components';
import { RecordTableColumn, RecordTableExpandable } from '@akamuinsaner/mr-components/RecordTable';
import { Stack, Link, Divider, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: RecordTableColumn<DataType>[] = [
    {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => tags.join(',')
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Stack direction="row" spacing={1}>
                <Link>Invite {record.name}</Link>
                <Divider />
                <Link>Delete</Link>
            </Stack>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default function Expandable() {
    const [expandedRowKeys, setExpandedRowKeys] = React.useState<Array<number | string>>([]);
    const [isControlled, setIsControlled] = React.useState<boolean>(false);
    const [isCustomIcon, setIsCustomIcon] = React.useState<boolean>(false);
    const [expandByRowClick, setExpandByRowClick] = React.useState<boolean>(false);
    const renderExpandIcon = (record: any, index: number, expanded: boolean) => {
        if (expanded) return <RemoveCircleOutlineIcon />
        return <AddCircleOutlineIcon />
    }
    const onExpandedRowsChange = (keys: Array<number | string>, rows: any[]) => {
        if (isControlled) setExpandedRowKeys(keys);
        console.log('onExpandedRowsChange', keys, rows)
    }
    const expandable: RecordTableExpandable<any> = {
        defaultExpandAllRows: true,
        expandedRowKeys: isControlled ? expandedRowKeys : null,
        expandedRowClassName: (record, index) => 'className',
        expandIcon: isCustomIcon ? renderExpandIcon : null,
        expandedRowRender: (record, index, expanded) => `${index}-${record.name}-${record.address}`,
        onExpandedRowsChange: onExpandedRowsChange,
        onExpand: (record) => console.log('onExpand', record),
        expandRowByClick: expandByRowClick
    }
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <FormControlLabel control={<Checkbox
                    checked={isCustomIcon}
                    onChange={e => setIsCustomIcon(e.target.checked)}
                />} label="expandIcon" />

                <FormControlLabel control={<Checkbox
                    checked={isControlled}
                    onChange={e => setIsControlled(e.target.checked)}
                />} label="controll" />

                <FormControlLabel control={<Checkbox
                    checked={expandByRowClick}
                    onChange={e => setExpandByRowClick(e.target.checked)}
                />} label="byClickRow" />
            </Stack>
            <Typography>expanded rows: {expandedRowKeys.join(' , ')}</Typography>
            <RecordTable<DataType>
                rowKey="key"
                columns={columns}
                dataSource={data}
                expandable={expandable}
            />
        </Stack>

    )
}