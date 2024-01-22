import React from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { RecordTable } from '@akamuinsaner/mr-components';

export default () => {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{ marginTop: '80px' }}
        >
            <Typography
                variant='h4'
                fontWeight="bold"
            >API</Typography>
            <Typography>
                See the documentation below for a complete reference
                to all of the props and classes available to the components
                mentioned here.
            </Typography>
            <Typography
                variant='h6'
                fontWeight="bold"
            >Record table props</Typography>
            <RecordTable
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f', whiteSpace: 'nowrap' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'bordered',
                        description: 'tell if table is bordered',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'className',
                        description: 'add className to table container',
                        datatype: 'string',
                        default: '-'
                    },
                    {
                        property: '*columns',
                        description: 'table header configs',
                        datatype: <span><Link href="#columns">RecordTableColumn</Link>[]</span>,
                        default: '-'
                    },
                    {
                        property: 'component',
                        description: 'the component used for the root node',
                        datatype: 'elementType',
                        default: '-'
                    },
                    {
                        property: '*dataSource',
                        description: 'the data to be displayed by table',
                        datatype: 'any[]',
                        default: '-'
                    },
                    {
                        property: 'dropable',
                        description: 'tell if table is draggable and dropable',
                        datatype: <span><Link href="#dropable">RecordTableDropable</Link></span>,
                        default: '-'
                    },
                    {
                        property: 'expandable',
                        description: 'tell if table row is expandable',
                        datatype: <span><Link href="#expandable">RecordTableExpandable</Link></span>,
                        default: '-'
                    },
                    {
                        property: 'filterInfo',
                        description: 'the filtering behaviors of table',
                        datatype: <span><Link href="#filterable">RecordTableFilterable</Link></span>,
                        default: '-'
                    },
                    {
                        property: 'loading',
                        description: 'controll the loading state of table',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'pagination',
                        description: 'add pagination config to table',
                        datatype: <span><Link href="https://mui.com/material-ui/api/table-pagination/">TablePaginationProps</Link> | false;</span>,
                        default: '-'
                    },
                    {
                        property: 'rowClassName',
                        description: 'className added to table rows',
                        datatype: 'string | { (record: T, index: number): string }',
                        default: '-'
                    },
                    {
                        property: 'rowKey',
                        description: 'unique key of each table row',
                        datatype: 'string | number | { (record: T): string | number }',
                        default: '-'
                    },
                    {
                        property: 'rowSelection',
                        description: 'row select config of table',
                        datatype: <span><Link href="#sortable">RecordTableRowSelection</Link></span>,
                        default: '-'
                    },
                    {
                        property: 'scroll',
                        description: 'set table scrollable',
                        datatype: '{ x?: number, y?: number | "auto" }',
                        default: '-'
                    },
                    {
                        property: 'size',
                        description: 'specefy the size to display',
                        datatype: 'small | medium',
                        default: '-'
                    },
                    {
                        property: 'sortInfo',
                        description: 'the sorting behaviors of table',
                        datatype: <span><Link href="#selectable">RecordTableSortable</Link></span>,
                        default: '-'
                    },
                    {
                        property: 'sticky',
                        description: 'tell if table header is sticky',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'sx',
                        description: 'styles of table container',
                        datatype: 'sxProps',
                        default: '-'
                    },
                ]}
                pagination={false}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="columns"
            >Record table column</Typography>
            <RecordTable
                pagination={false}
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'align',
                        description: 'tell how to align table header cells',
                        datatype: 'left | right | center',
                        default: '-'
                    },
                    {
                        property: 'children',
                        description: 'render children of header cells when use grouped header',
                        datatype: <span><Link href="#columns">RecordTableColumn</Link>[]</span>,
                        default: '-'
                    },
                    {
                        property: 'className',
                        description: 'className of header cells',
                        datatype: 'string',
                        default: '-'
                    },
                    {
                        property: 'colSpan',
                        description: 'merge the columns of header cells, hide when the value if 0',
                        datatype: 'number',
                        default: '-'
                    },
                    {
                        property: 'dataIndex',
                        description: 'the data retrive path',
                        datatype: 'string | string[]',
                        default: '-'
                    },
                    {
                        property: 'filterMode',
                        description: '',
                        datatype: 'autoComplete | input | checkbox',
                        default: '-'
                    },
                    {
                        property: 'filters',
                        description: 'filter options menu data',
                        datatype: 'RecordTableFilters[]',
                        default: '-'
                    },
                    {
                        property: 'fixed',
                        description: 'set table column fixed when scrollable',
                        datatype: 'left | right',
                        default: '-'
                    },
                    {
                        property: '*key',
                        description: 'unique symbol of each header cell',
                        datatype: 'string',
                        default: '-'
                    },
                    {
                        property: '*key',
                        description: 'unique symbol of each header cell',
                        datatype: 'string',
                        default: '-'
                    },
                    {
                        property: 'onCell',
                        description: 'body cell properties of specefied columns',
                        datatype: '(record: T, index: number) => any',
                        default: '-'
                    },
                    {
                        property: 'render',
                        description: 'render function of how to display column data',
                        datatype: '(value: any, record: T, index: number) => any',
                        default: '-'
                    },
                    {
                        property: 'sortable',
                        description: 'tell whether the table column is sortable',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'title',
                        description: 'table header text',
                        datatype: 'React.ReactNode',
                        default: '-'
                    },
                    {
                        property: 'width',
                        description: 'specify column width when table layout is fixed',
                        datatype: 'number',
                        default: '-'
                    },
                ]}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="expandable"
            >Expanding props</Typography>
            <RecordTable
                pagination={false}
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'defaultExpandAllRows',
                        description: 'expand all table rows when initialized',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'defaultExpandedRowKeys',
                        description: 'expand specefied table rows when initialized',
                        datatype: 'Array<string | number>',
                        default: '-'
                    },
                    {
                        property: 'expandedRowClassName',
                        description: 'the className of expanded rows',
                        datatype: '(record: T, index: number) => string;',
                        default: '-'
                    },
                    {
                        property: 'expandedRowKeys',
                        description: 'specefied table row expanded',
                        datatype: 'Array<string | number>',
                        default: '-'
                    },
                    {
                        property: 'expandedRowRender',
                        description: 'rendered content in expanded area',
                        datatype: '(record: T, index: number, expanded) => React.ReactNode',
                        default: '-'
                    },
                    {
                        property: 'expandRowByClick',
                        description: 'expand when click table rows',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'expandIcon',
                        description: 'specefiy the expand icon',
                        datatype: '(record: T, index: number, expanded) => React.ReactNode',
                        default: '-'
                    },
                    {
                        property: 'fixed',
                        description: 'tell if the expand column is fixed',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'onExpand',
                        description: 'fired when click the expand icon',
                        datatype: '(record: T) => void',
                        default: '-'
                    },
                    {
                        property: 'onExpandedRowsChange',
                        description: 'fired when expanded rows change',
                        datatype: '(expandKeys: Array<string | number>, expandedRows: T[]) => void',
                        default: '-'
                    },
                ]}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="dropable"
            >Dropping props</Typography>
            <RecordTable
                pagination={false}
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'dragStyle',
                        description: 'added styles when a table row is dragging',
                        datatype: 'React.CSSProperties',
                        default: '-'
                    },
                    {
                        property: 'lockAxis',
                        description: 'lock dragging on a vertical axis',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'distance',
                        description: 'distance mouse moves before dragging',
                        datatype: 'number',
                        default: '-'
                    },
                    {
                        property: 'delay',
                        description: 'duration mouse press before dragging',
                        datatype: 'number',
                        default: '-'
                    },
                    {
                        property: 'disabledRows',
                        description: 'disabled table rows',
                        datatype: '(record: T, index: number) => boolean',
                        default: '-'
                    },
                    {
                        property: 'disableStyle',
                        description: 'styles of disabled table rows',
                        datatype: 'React.CSSProperties',
                        default: '-'
                    },
                    {
                        property: 'onDropEnd',
                        description: 'fired when a table row is dropped',
                        datatype: '(drag: { index: number; key: string | number; record: T }, drop: { index: number; key: string | number; record: T }) => void;',
                        default: '-'
                    },
                ]}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="sortable"
            >Sorting props</Typography>
            <RecordTable
                pagination={false}
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'defaultSortParams',
                        description: 'assigned sorting parameters when mounted',
                        datatype: '{ order: asc | desc, orderBy: string }',
                        default: '-'
                    },
                    {
                        property: 'onSortChange',
                        description: 'fired when sorting condition change',
                        datatype: '(sortParams: RecordTableSortParams) => void',
                        default: '-'
                    },
                    {
                        property: 'sortIcon',
                        description: 'specefiy the sorting icon',
                        datatype: '(column: RecordTableColumn<any>) => React.JSXElementConstructor<any>',
                        default: '-'
                    },
                    {
                        property: 'sortParams',
                        description: 'assigned sorting parameters',
                        datatype: '{ order: asc | desc, orderBy: string }',
                        default: '-'
                    },
                ]}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="filterable"
            >Filtering props</Typography>
            <RecordTable
                pagination={false}
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'defaultFilterParams',
                        description: 'assigned filtering parameters when mounted',
                        datatype: '{ [name: string]: Array<string | number> }',
                        default: '-'
                    },
                    {
                        property: 'filterIcon',
                        description: 'specefiy the filtering icon',
                        datatype: '(column: RecordTableColumn<T>, index: number) => React.JSXElementConstructor<any>',
                        default: '-'
                    },
                    {
                        property: 'filterMode',
                        description: '',
                        datatype: '(column: RecordTableColumn<T>, index: number) => autoComplete | input | checkbox',
                        default: '-'
                    },
                    {
                        property: 'filters',
                        description: 'filter options menu data',
                        datatype: '(column: RecordTableColumn<T>, index: number) => RecordTableFilters[]',
                        default: '-'
                    },
                    {
                        property: 'filterParams',
                        description: 'assigned filtering parameters',
                        datatype: '{ [name: string]: Array<string | number> }',
                        default: '-'
                    },
                    {
                        property: 'onFilterChange',
                        description: 'fired when filtering information change',
                        datatype: '(filterParams: { [name: string]: Array<string | number> }) => void',
                        default: '-'
                    },
                    {
                        property: 'popperProps',
                        description: 'filter dropdown properties',
                        datatype: 'Partial<PopperProps> | { (column: RecordTableColumn<T>, index: number): Partial<PopperProps> }',
                        default: '-'
                    },
                ]}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="selectable"
            >Row selection props</Typography>
            <RecordTable
                pagination={false}
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'columnTitle',
                        description: 'selection column title',
                        datatype: 'string | number | React.ReactNode',
                        default: '-'
                    },
                    {
                        property: 'defaultSelectedRowKeys',
                        description: 'selection row keys when mounted',
                        datatype: 'Array<string | number>',
                        default: '-'
                    },
                    {
                        property: 'fixed',
                        description: 'tell if selection column if fixed when scrollable',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'hideSelectAll',
                        description: 'hide selecte all checkbox',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'onChange',
                        description: 'fired when selected rows change',
                        datatype: '(selectedRowKeys: Array<string | number>, selectRows: any[]) => void',
                        default: '-'
                    },
                    {
                        property: 'onSelect',
                        description: 'fired when table rows are selected or unselected',
                        datatype: '(record: any, selected: boolean) => void',
                        default: '-'
                    },
                    {
                        property: 'selectedRowKeys',
                        description: 'fired when table rows are selected or unselected',
                        datatype: '(record: any, selected: boolean) => void',
                        default: '-'
                    },
                    {
                        property: 'selectedRowKeys',
                        description: 'selection row keys',
                        datatype: 'Array<string | number>',
                        default: '-'
                    },
                    {
                        property: 'type',
                        description: 'select type',
                        datatype: 'checkbox | radio',
                        default: '-'
                    }
                ]}
            />
        </Stack>
    )
}