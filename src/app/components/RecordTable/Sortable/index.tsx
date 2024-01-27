import React from 'react';
import { RecordTable } from '@akamuinsaner/mr-components';
import {
    RecordTableColumn,
    RecordTableRowSelection,
    RecordTableSortable,
    RecordTableSortParams,
} from '@akamuinsaner/mr-components/RecordTable';
import {
    Stack,
    Link,
    Divider,
    Checkbox,
    FormControlLabel,
    Grid,
    Typography
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

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
        sortable: true
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sortable: true
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sortable: true
    },
];

const data: (key: any) => DataType = (key) => ({
    key: key,
    name: 'John Brown ' + key,
    age: 32 + key,
    address: 'New York No. 1 Lake Park' + key,
})

const datas = Array(50).fill({}).map((d, i) => data(i));

export default function Sortable() {
    const [dataSource, setDataSource] = React.useState<DataType[]>(datas);
    const [sortParams, setSortParams] = React.useState<RecordTableSortParams>({ order: 'asc', orderBy: '' });
    const [isControlled, setIsControlled] = React.useState<boolean>(false);
    const [isCustomIcon, setIsCustomIcon] = React.useState<boolean>(false);
    React.useEffect(() => setDataSource(datas), [isControlled]);
    React.useEffect(() => sortData(), [sortParams]);
    const renderSortIcon = (column: RecordTableColumn<any>) => SortIcon;
    const sortInfo: RecordTableSortable<any> = {
        defaultSortParams: { order: 'desc', orderBy: 'age' },
        sortIcon: isCustomIcon ? renderSortIcon : null,
        sortParams: isControlled ? sortParams : null,
        onSortChange: (sortParams) => {
            console.log('onSortChange', sortParams);
            if (isControlled) setSortParams(sortParams);
        }
    }
    const sortData = () => {
        const { order, orderBy } = sortParams;
        let sorter = (a: any, b: any) => 0;
        if (order === 'asc' && orderBy) sorter = (a, b) => a[orderBy] > b[orderBy] ? 1 : -1;
        if (order === 'desc' && orderBy) sorter = (a, b) => a[orderBy] > b[orderBy] ? -1 : 1;
        setDataSource(datas.sort(sorter));
    }
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <FormControlLabel control={<Checkbox
                    checked={isCustomIcon}
                    onChange={e => setIsCustomIcon(e.target.checked)}
                />} label="sortIcon" />

                <FormControlLabel control={<Checkbox
                    checked={isControlled}
                    onChange={e => setIsControlled(e.target.checked)}
                />} label="controll" />
            </Stack>
            <Typography>order: {sortParams.order} orderBy: {sortParams.orderBy}</Typography>
            <RecordTable<DataType>
                columns={columns}
                dataSource={dataSource}
                rowKey="key"
                sortInfo={sortInfo}
            />
        </Stack>
    )
}