import React from 'react';
import { RecordTable } from '@akamuinsaner/mr-components';
import { RecordTableColumn } from '@akamuinsaner/mr-components/RecordTable';
import {
    Stack,
    Link,
    Divider,
    Grid,
    FormControlLabel,
    Checkbox
} from '@mui/material';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: RecordTableColumn<DataType>[] = [
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
    {
        key: '4',
        name: 'Tony Stark',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['smark', 'engineer'],
    },
    {
        key: '5',
        name: 'Tony Park',
        age: 32,
        address: 'New York No. 2 Lake Park',
        tags: ['intelligent', 'student'],
    },
    {
        key: '6',
        name: 'Thor',
        age: 32,
        address: 'Asgard No. 1 Lake Park',
        tags: ['intelligent', 'student'],
    },
];

export default function Droppable() {
    const dragStyles = { background: 'red' };
    const [dataSource, setDataSource] = React.useState<DataType[]>(data);
    const [lockAxis, setLockAxis] = React.useState<boolean>(false);
    const [delay, setDelay] = React.useState<boolean>(false);
    const [distance, setDistance] = React.useState<boolean>(false);
    const [customStyle, setCustomStyle] = React.useState<boolean>(false);
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <FormControlLabel control={<Checkbox
                    checked={customStyle}
                    onChange={e => setCustomStyle(e.target.checked)}
                />} label="customStyle" />

                <FormControlLabel control={<Checkbox
                    checked={lockAxis}
                    onChange={e => setLockAxis(e.target.checked)}
                />} label="lockAxis" />

                <FormControlLabel control={<Checkbox
                    checked={delay}
                    onChange={e => setDelay(e.target.checked)}
                />} label="delay" />

                <FormControlLabel control={<Checkbox
                    checked={distance}
                    onChange={e => setDistance(e.target.checked)}
                />} label="distance" />
            </Stack>
            <RecordTable<DataType>
                rowKey="key"
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                dropable={{
                    dragStyle: customStyle ? { backgroundColor: 'red' } : null,
                    lockAxis,
                    delay: delay ? 500 : 0,
                    distance: distance ? 20 : 0,
                    disabledRows: (record, index) => record.name === 'Joe Black',
                    disableStyle: { cursor: 'not-allowed' },
                    onDropEnd: (drag, drop) => {
                        console.log(drag, drop);
                        const newDataSource = [...dataSource];
                        newDataSource.splice(drag.index, 1);
                        newDataSource.splice(drop.index, 0, drag.record);
                        console.log(newDataSource)
                        setDataSource(newDataSource);
                    }
                }}
                scroll={{
                    y: 300
                }}
            />
        </Stack>
    )
}