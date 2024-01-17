export const simple = ``;

export const code = `
import { RecordTable } from '@akamuinsaner/mr-components';
import { RecordTableColumn } from '@akamuinsaner/mr-components/RecordTable';
import { Box, Link } from '@mui/material';


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const sharedOnCell = () => {
    return {
        sx: {
            whiteSpace: 'nowrap'
        }
    }
}

const columns: RecordTableColumn<DataType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        fixed: 'left'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        fixed: 'left'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address1',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address2',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address3',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address4',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address5',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address6',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address7',
        onCell: sharedOnCell,
        width: 200,
    },
    {
        title: 'Action',
        dataIndex: 'address',
        key: 'Action',
        render: (_, record) => (<Link>Delete</Link>),
        width: 200,
        fixed: 'right'
    },
];

const data: (key: any) => DataType = (key) => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32,
    address: 'New York No. 1 Lake Park',
})

const dataSource = Array(50).fill({}).map((d, i) => data(i));

export default () => {
    return (
        <Box sx={{ height: '300px' }}>
            <RecordTable<DataType>
                columns={columns}
                dataSource={dataSource}
                rowKey="key"
                scroll={{
                    y: 'auto',
                    x: 1850
                }}
            />
        </Box>
    )
}
`