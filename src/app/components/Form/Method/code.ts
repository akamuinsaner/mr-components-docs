export const code = `
import React from 'react';
import { Form } from '@akamuinsaner/mr-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default () => {
    const form = Form.useForm();
    const onSubmit = () => {
        form.validates((errors, values) => {
            console.log(errors, values)
        })
    }
    return (
        <Form
            form={form}
            layout="Stack"
            stackProps={{
                direction: 'column',
                spacing: 2,
            }}
        >
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
            <Button variant="contained" onClick={onSubmit}>submit</Button>
        </Form>
    )
}
`