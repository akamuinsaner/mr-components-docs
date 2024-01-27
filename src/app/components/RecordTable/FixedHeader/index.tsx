import { RecordTable } from '@akamuinsaner/mr-components';
import {
    RecordTableColumn,
} from '@akamuinsaner/mr-components/RecordTable';
import { Box } from '@mui/material';


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const columns: RecordTableColumn<DataType>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const data: (key: any) => DataType = (key) => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32,
    address: 'New York No. 1 Lake Park',
})

const dataSource = Array(50).fill({}).map((d, i) => data(i));

export default function FixedHeader() {
    return (
        <Box sx={{ height: '300px' }}>
            <RecordTable<DataType>
                columns={columns}
                dataSource={dataSource}
                rowKey="key"
                scroll={{
                    y: 'auto'
                }}
            />
        </Box>
    )
}