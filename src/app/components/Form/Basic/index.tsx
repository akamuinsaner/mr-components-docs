import React from 'react';
import { Form } from 'mr-components';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default () => {
    const initialValues = { firstName: 'Tony', lastName: 'Stark' }
    const onValueChange = (preValue: any, curValue: any) => {
        console.log(preValue, curValue)
    }
    const onSubmit = (values: any) => {
        console.log(values);
    }
    return (
        <Form
            initialValues={initialValues}
            onValuesChange={onValueChange}
            onSubmit={onSubmit}
        >
            <Stack spacing={2}>
                <Form.Item
                    name="firstName"
                    rules={[{ required: true }]}
                >
                    <TextField label="firstName" placeholder="firstName" />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    rules={[{ required: true }]}
                >
                    <TextField label="lastName" placeholder="lastName" />
                </Form.Item>
                <Form.Submit>
                    <Button variant="contained">submit</Button>
                </Form.Submit>
            </Stack>
        </Form>
    )
}