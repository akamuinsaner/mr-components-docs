export const simple = `<RecordTable<DataType> rowKey="key" columns={columns} dataSource={data} />`;

export const code = `
import { RecordTable } from '@akamuinsaner/mr-components';
import { RecordTableColumn } from '@akamuinsaner/mr-components/RecordTable';
import { Stack, Link, Divider } from '@mui/material';

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
];

export default () => {
    return (
        <RecordTable<DataType>
            rowKey="key"
            columns={columns}
            dataSource={data}
        />
    )
}
`