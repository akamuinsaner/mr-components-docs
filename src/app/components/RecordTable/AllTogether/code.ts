export const simple = ``;

export const code = `
import React from 'react';
import { RecordTable } from '@akamuinsaner/mr-components';
import {
    RecordTableColumn,
    RecordTableRowSelection,
    RecordTableExpandable,
} from '@akamuinsaner/mr-components/RecordTable';
import {
    Link,
    FormControlLabel,
    Stack,
    Grid,
    Checkbox
} from '@mui/material';

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
        fixed: 'left',
        onCell: sharedOnCell,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        fixed: 'left',
        onCell: sharedOnCell,
        sortable: true
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        onCell: sharedOnCell,
        width: 200,
        filters: [
            {
                id: 'New York',
                name: 'New York'
            },
            {
                id: 'London',
                name: 'London'
            },
        ]
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
    age: Math.floor(Math.random() * 100),
    address: Math.random() > 0.5 ? 'New York' : 'London',
})

const dataSource = Array(50).fill({}).map((d, i) => data(i));

export default () => {
    const [bordered, setBordered] = React.useState<boolean>(false);
    const toggleBordered = (e: React.ChangeEvent<HTMLInputElement>) => setBordered(e.target.checked);
    const [densed, setDensed] = React.useState<boolean>(false);
    const toggleDensed = (e: React.ChangeEvent<HTMLInputElement>) => setDensed(e.target.checked);
    const [loading, setLoading] = React.useState<boolean>(false);
    const toggleLoading = (e: React.ChangeEvent<HTMLInputElement>) => setLoading(e.target.checked);
    const [headerFixed, setHeaderFixed] = React.useState<boolean>(false);
    const toggleHeaderFixed = (e: React.ChangeEvent<HTMLInputElement>) => setHeaderFixed(e.target.checked);
    const [columnFixed, setColumnFixed] = React.useState<boolean>(false);
    const toggleColumnFixed = (e: React.ChangeEvent<HTMLInputElement>) => setColumnFixed(e.target.checked);
    const [hidePagination, setHidePagination] = React.useState<boolean>(false);
    const toggleHidePagination = (e: React.ChangeEvent<HTMLInputElement>) => setHidePagination(e.target.checked);
    const [expandable, setExpandable] = React.useState<boolean>(false);
    const toggleExpandable = (e: React.ChangeEvent<HTMLInputElement>) => setExpandable(e.target.checked);
    const [selectable, setSelectable] = React.useState<boolean>(false);
    const toggleSelectable = (e: React.ChangeEvent<HTMLInputElement>) => setSelectable(e.target.checked);

    const expandableProps: RecordTableExpandable<DataType> = {
        fixed: columnFixed
    }
    const selectionProps: RecordTableRowSelection<DataType> = {
        fixed: columnFixed,
        type: 'checkbox'
    }

    return (
        <Stack direction="column" spacing={2}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="bordered"
                        control={<Checkbox checked={bordered} onChange={toggleBordered} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="densed"
                        control={<Checkbox checked={densed} onChange={toggleDensed} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="loading"
                        control={<Checkbox checked={loading} onChange={toggleLoading} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="headerFixed"
                        control={<Checkbox checked={headerFixed} onChange={toggleHeaderFixed} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="columnFixed"
                        control={<Checkbox checked={columnFixed} onChange={toggleColumnFixed} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="hidePagination"
                        control={<Checkbox checked={hidePagination} onChange={toggleHidePagination} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="expandable"
                        control={<Checkbox checked={expandable} onChange={toggleExpandable} />}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        label="selectable"
                        control={<Checkbox checked={selectable} onChange={toggleSelectable} />}
                    />
                </Grid>
            </Grid>
            <RecordTable<DataType>
                columns={columns}
                dataSource={dataSource}
                rowKey="key"
                scroll={{
                    y: headerFixed ? 400 : null,
                    x: columnFixed ?1850 : null,
                }}
                bordered={bordered}
                loading={loading}
                size={densed ? 'small' : null}
                expandable={expandable ? expandableProps : null}
                rowSelection={selectable ? selectionProps : null}
                pagination={hidePagination ? false : null}
            />
        </Stack>
    )
}
`