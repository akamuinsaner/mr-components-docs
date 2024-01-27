import React from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { RecordTable } from '@akamuinsaner/mr-components';

export default function ApiTable() {
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
            >Form props</Typography>
            <RecordTable
                columns={[
                    { key: 'property', title: 'Property', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                    { key: 'description', title: 'Description' },
                    { key: 'datatype', title: 'Datatype', onCell: () => ({ sx: { color: '#c41d7f' } }) },
                    { key: 'default', title: 'Default', onCell: () => ({ sx: { whiteSpace: 'nowrap' } }) },
                ]}
                dataSource={[
                    {
                        property: 'disabled',
                        description: 'disable all the form components belong to this form',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'form',
                        description: 'form instance to provide multiple form methods',
                        datatype: <Link href="#formInstanceApi">FormInstance</Link>,
                        default: '-'
                    },
                    {
                        property: 'fullWidth',
                        description: 'set full width to form components belong to this form',
                        datatype: 'boolean',
                        default: '-'
                    },
                    {
                        property: 'gridProps',
                        description: '',
                        datatype: <Link href="https://mui.com/material-ui/api/grid/">GridProps</Link>,
                        default: '-'
                    },
                    {
                        property: 'initialValues',
                        description: 'set initial values to form',
                        datatype: 'any',
                        default: '-'
                    },
                    {
                        property: 'layout',
                        description: 'set which layout to display',
                        datatype: 'Stack | Grid',
                        default: '-'
                    },
                    {
                        property: 'onSubmit',
                        description: 'fired when submit the form successfully',
                        datatype: '(values: any) => void',
                        default: '-'
                    },
                    {
                        property: 'onSubmitFail',
                        description: 'fired when submit the form unsuccessfully',
                        datatype: '(errors: any) => void',
                        default: '-'
                    },
                    {
                        property: 'onValuesChange',
                        description: 'fired when form value change',
                        datatype: '(prev: any, cur: any) => void',
                        default: '-'
                    },
                    {
                        property: 'size',
                        description: 'set the size of form components',
                        datatype: 'small | medium',
                        default: '-'
                    },
                    {
                        property: 'stackProps',
                        description: '',
                        datatype: <Link href="https://mui.com/material-ui/api/stack/">stackProps</Link>,
                        default: '-'
                    },
                ]}
                pagination={false}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="formInstanceApi"
            >Form Instance</Typography>
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
                        property: 'getFieldsValue',
                        description: 'get specefic field values from form fields',
                        datatype: '(names?: string[]) => any',
                        default: '-'
                    },
                    {
                        property: 'getFieldValue',
                        description: 'get value from a specefic form field',
                        datatype: '(names: string) => any',
                        default: '-'
                    },
                    {
                        property: 'resetFields',
                        description: 'reset all form components',
                        datatype: '() => void',
                        default: '-'
                    },
                    {
                        property: 'setFieldsValue',
                        description: 'set values to specefic form fields',
                        datatype: '(values: { [name: string]: any }) => void',
                        default: '-'
                    },
                    {
                        property: 'setFieldValue',
                        description: 'set value to a specefic form field',
                        datatype: '(name: string, value: any) => void',
                        default: '-'
                    },
                    {
                        property: 'validates',
                        description: 'validate form fields',
                        datatype: '(callback: (errors: any, value: any) => void, names?: string[]) => void',
                        default: '-'
                    }
                ]}
            />
            <Typography
                variant='h6'
                fontWeight="bold"
                id="formItemApi"
            >Form Item</Typography>
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
                        property: 'checkable',
                        description: 'tell if form field is checkable',
                        datatype: `boolean`,
                        default: '-'
                    },

                    {
                        property: 'gridProps',
                        description: 'specefied when form is of grid layout',
                        datatype: `boolean`,
                        default: '-'
                    },
                    {
                        property: 'multiple',
                        description: 'tell if form field is multiple select',
                        datatype: `boolean`,
                        default: '-'
                    },
                    {
                        property: '*name',
                        description: 'unique key of each form field',
                        datatype: 'string',
                        default: '-'
                    },
                    {
                        property: 'rules',
                        description: 'rules about how to validate form fields',
                        datatype: <span><Link>RuleConfig</Link>[]</span>,
                        default: '-'
                    },
                ]}
            />
        </Stack>
    )
}