import React from 'react';
import {
    Checkbox,
    Radio,
    RadioGroup,
    Stack,
    Grid,
    FormControlLabel,
    TextField,
    Typography
} from '@mui/material';
import { RecordTable } from '@akamuinsaner/mr-components';
import {
    RecordTableColumn,
    RecordTableRowSelection,
} from '@akamuinsaner/mr-components/RecordTable';
import { TablePaginationProps } from '@mui/base';

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
];

const data: (key: any) => DataType = (key) => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32,
    address: 'New York No. 1 Lake Park',
})

const datas = Array(50).fill({}).map((d, i) => data(i));

export default function Pagination() {
    const [dataSource, setDataSource] = React.useState<DataType[]>(datas);
    const rowsPerPageOptions: number[] = [10, 15, 20];
    const [controlled, setControlled] = React.useState<boolean>(false);
    const [showRowsPerPageOptions, setShowRowsPerPageOptions] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
    React.useEffect(() => paganiteData(), [page, rowsPerPage]);
    React.useEffect(() => paganiteData(), [controlled]);
    const paganiteData = () => {
        if (!controlled) {
            setDataSource(datas);
            return;
        }
        const result = datas.filter((d, i) => 
            (i >= page * rowsPerPage && i < (page + 1) * rowsPerPage));
        setDataSource(result);
    }
    let pagination: TablePaginationProps =  {
        count: datas.length,
        page,
        onPageChange: (e, page) => {
            console.log('onPageChange', page)
            if (controlled) setPage(page);
        },
        rowsPerPage,
        rowsPerPageOptions: showRowsPerPageOptions ? rowsPerPageOptions : [],
        onRowsPerPageChange: (e) => {
            console.log('onRowsPerPageChange', Number(e.target.value));
            if (controlled) setRowsPerPage(Number(e.target.value))
        },
    };

    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <FormControlLabel
                    control={<Checkbox
                        checked={controlled}
                        onChange={e => setControlled(e.target.checked)}
                    />}
                    label="controlled"
                />

                <FormControlLabel
                    control={<Checkbox
                        checked={showRowsPerPageOptions}
                        onChange={e => setShowRowsPerPageOptions(e.target.checked)}
                    />}
                    label="showRowsPerPageOptions"
                />
            </Stack>
            <Typography>page: {page}, rowsPerPage: {rowsPerPage}, count: {pagination.count}</Typography>
            <RecordTable<DataType>
                columns={columns}
                dataSource={dataSource}
                rowKey="key"
                pagination={(controlled ? pagination : null) as any}
            />
        </Stack>
    )
}