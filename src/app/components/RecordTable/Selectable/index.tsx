import React from 'react';
import {
    Checkbox,
    Radio,
    RadioGroup,
    Stack,
    FormControlLabel,
    TextField,
    Typography
} from '@mui/material';
import { RecordTable } from '@akamuinsaner/mr-components';
import {
    RecordTableColumn,
    RecordTableRowSelection,
} from '@akamuinsaner/mr-components/RecordTable';

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

const dataSource = Array(50).fill({}).map((d, i) => data(i));

export default () => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<Array<number | string>>([]);
    const [isControled, setIsControlled] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>('');
    const [hideAll, setHideAll] = React.useState<boolean>(false);
    const [selectType, setSelectType] = React.useState<'checkbox' | 'radio'>('checkbox');
    const onTypeChange = (e: any) => setSelectType(e.target.value);
    const onTitleChange = (e: any) => setTitle(e.target.value);
    const onHideAllChange = (e: any) => setHideAll(e.target.checked);

    const onSelectionchange = (keys: (string | number)[], rows: any[]) => {
        if (isControled) setSelectedRowKeys(keys);
        console.log('onSelectionchange', keys, rows);
    }

    const onSelect = (record: any, select: boolean) => {
        console.log(record, select)
    }

    let rowSelection: RecordTableRowSelection<DataType> = {
        defaultSelectedRowKeys: [1, 2, 3, 4, 5, 6],
        type: selectType,
        onChange: onSelectionchange,
        onSelect: onSelect,
        hideSelectAll: hideAll,
        columnTitle: title,
        selectedRowKeys: isControled? selectedRowKeys : null
    };

    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <RadioGroup row value={selectType} onChange={onTypeChange}>
                    <FormControlLabel value="checkbox" control={<Radio />} label="checkbox" />
                    <FormControlLabel value="radio" control={<Radio />} label="radio" />
                </RadioGroup>
                <FormControlLabel
                    control={<Checkbox checked={hideAll} onChange={onHideAllChange} />}
                    label="hideAllSelect"
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={isControled}
                        onChange={(e) => setIsControlled(e.target.checked)}
                        />}
                    label="controlled"
                />
                <TextField
                    label="title"
                    value={title}
                    onChange={onTitleChange}
                    size="small"
                />
            </Stack>
            <Typography>selected keys: {selectedRowKeys.join(' , ')}</Typography>
            <RecordTable<DataType>
                columns={columns}
                dataSource={dataSource}
                rowKey="key"
                rowSelection={rowSelection}
            />
        </Stack>
    )
}