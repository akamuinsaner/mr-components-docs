import React from 'react';
import { Form } from '@akamuinsaner/mr-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

export default function Layout() {
    const [layout, setLayout] = React.useState<"Stack" | "Grid">("Stack");
    const onSubmit = (values: any) => console.log(values);
    return (
        <>
            <ButtonGroup sx={{ marginBottom: '20px' }}>
                <Button
                    onClick={() => setLayout('Stack')}
                    variant={layout === 'Stack' ? 'contained' : 'outlined'}
                >Stack</Button>
                <Button
                    onClick={() => setLayout('Grid')}
                    variant={layout === 'Grid' ? 'contained' : 'outlined'}
                >Grid</Button>
            </ButtonGroup>
            <Form
                layout={layout}
                onSubmit={onSubmit}
                stackProps={{
                    direction: 'column',
                    spacing: 2,
                }}
                gridProps={{
                    containerProps: {
                        container: true,
                        spacing: 2,
                    },
                    itemProps: {
                        item: true,
                        xs: 4
                    }
                }}
            >
                <Form.Item
                    name="firstName"
                >
                    <TextField
                        label="firstName"
                        placeholder="firstName"
                    />
                </Form.Item>
                <Form.Item
                    name="lastName"
                >
                    <TextField
                        label="lastName"
                        placeholder="lastName"
                    />
                </Form.Item>
                <Form.Submit>
                    <Button
                        variant="contained"
                    >submit</Button>
                </Form.Submit>
            </Form>
        </>
    )
}