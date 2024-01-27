import React from 'react';
import { RecordTable } from '@akamuinsaner/mr-components';
import { RecordTableColumn } from '@akamuinsaner/mr-components/RecordTable';
import { ReactTableFilterModes } from '@akamuinsaner/mr-components/RecordTable/Filter';
import {
    Stack,
    Link,
    Divider,
    TextField,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Typography,
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
        filters: [
            {
                id: 'John Brown',
                name: 'John Brown'
            },
            {
                id: 'Jim Green',
                name: 'Jim Green'
            },
            {
                id: 'Joe Black',
                name: 'Joe Black'
            }
        ]
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
        filters: [
            {
                id: 'New York',
                name: 'New York'
            },
            {
                id: 'London',
                name: 'London'
            },
            {
                id: 'Sydney',
                name: 'Sydney'
            }
        ]
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

export default function Filter() {
    const modes = ['checkbox', 'input', 'autoComplete']
    const [dataSource, setDataSource] = React.useState<DataType[]>(data);
    const [controlled, setControlled] = React.useState<boolean>(false);
    const [filterParams, setFilterParams] = React.useState<{ [name: string]: Array<string | number> }>({});
    const [filterMode, setFilterMode] = React.useState<ReactTableFilterModes>(null);
    React.useEffect(() => setDataSource(data), [controlled]);
    React.useEffect(() => filterData(), [filterParams]);
    const filterData = () => {
        const result = data.filter(d => {
            let success = true;
            for (let [key, values] of Object.entries(filterParams)) {
                const value = d[key as keyof DataType];
                if (!values || !values.length) continue;
                success = !!values.find(v => {
                    if (typeof v === 'string') {
                        return `${value}`.indexOf(v) > -1;
                    } else {
                        return v === value;
                    }
                })
                if (!success) break;
            }
            return success
        });
        setDataSource(result);
    }

    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <TextField
                    select
                    size='small'
                    sx={{ width: '200px' }}
                    value={filterMode}
                    onChange={e => setFilterMode(e.target.value as any)}
                    label="Select Filter Mode"
                >
                    {modes.map(o => <MenuItem
                        key={o}
                        value={o}
                    >{o}</MenuItem>)}
                </TextField>
                <FormControlLabel
                    label="controlled"
                    control={<Checkbox
                        checked={controlled}
                        onChange={e => setControlled(e.target.checked)}
                    />}
                />
            </Stack>
            <Typography>filterParams: {JSON.stringify(filterParams)}</Typography>
            <RecordTable<DataType>
                rowKey="key"
                columns={columns}
                dataSource={dataSource}
                filterInfo={{
                    defaultFilterParams: { name: ['Joe Black'] },
                    filterMode: (column, index) => filterMode,
                    popperProps: { placement: 'bottom-start' },
                    filterParams: controlled ? filterParams : null,
                    onFilterChange: (params) => {
                        console.log('onFilterChange', params);
                        if (controlled) {
                            setFilterParams(params);
                        }
                    }
                }}
            />
        </Stack>

    )
}