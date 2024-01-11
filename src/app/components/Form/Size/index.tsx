import React from 'react';
import { Form, Cascader, TreeSelect } from '@akamuinsaner/mr-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';

const treeData = [
    {
        id: 'parent 1',
        name: 'parent 1',
        children: [
            {
                id: 'parent 1-0',
                name: 'parent 1-0',
                children: [
                    {
                        id: 'leaf1',
                        name: 'leaf1',
                    },
                    {
                        id: 'leaf2',
                        name: 'leaf2',
                    },
                ],
            },
            {
                id: 'parent 1-1',
                name: 'parent 1-1',
                children: [
                    {
                        id: 'leaf3',
                        name: 'leaf3',
                    },
                ],
            },
        ],
    },
];

export default () => {
    const [size, setSize] = React.useState<"small" | "medium">("medium");
    const onSubmit = (values: any) => console.log(values);
    return (
        <>
            <ButtonGroup sx={{ marginBottom: '20px' }}>
                <Button
                    onClick={() => setSize('small')}
                    variant={size === 'small' ? 'contained' : 'outlined'}
                >small</Button>
                <Button
                    onClick={() => setSize('medium')}
                    variant={size === 'medium' ? 'contained' : 'outlined'}
                >medium</Button>
            </ButtonGroup>
            <Form
                size={size}
                layout="Stack"
                key={size}
                onSubmit={onSubmit}
                stackProps={{
                    direction: 'column',
                    spacing: 2,
                }}
            >
                <Form.Item
                    name="input"
                >
                    <TextField
                        label="Input"
                        placeholder="Input"
                    />
                </Form.Item>
                <Form.Item
                    name="select"
                >
                    <TextField
                        label="Select"
                        placeholder="Select"
                        select
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </TextField>
                </Form.Item>
                <Form.Item
                    name="cascader"
                >
                    <Cascader
                        options={treeData}
                        label="Cascader"
                        placeholder='Cascader'
                    />
                </Form.Item>
                <Form.Item
                    name="treeSelect"
                >
                    <TreeSelect
                        options={treeData}
                        label="TreeSelect"
                        placeholder='TreeSelect'
                    />
                </Form.Item>
                <Form.Item
                    name="radio"
                >
                    {({ value, onChange }) => (
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Radio</FormLabel>
                            <RadioGroup
                                row
                                defaultValue="female"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    )}
                </Form.Item>
                <Form.Item
                    name="switch"
                    checkable
                >
                    {({ value, onChange }) => (
                        <FormControlLabel control={<Switch
                            value={value}
                            onChange={onChange}
                        />} label="Switch" />
                    )}

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