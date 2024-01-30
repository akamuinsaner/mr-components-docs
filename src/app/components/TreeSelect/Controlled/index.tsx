"use client"
import React from 'react';
import { TreeSelect } from "@akamuinsaner/mr-components"
import { ButtonGroup, Button, Checkbox, FormControlLabel, Stack } from '@mui/material';

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



export default function Controlled() {
    const [value, setValue] = React.useState<any>('');
    const [multiple, setMultiple] = React.useState<boolean>(false);
    const [controlled, setControlled] = React.useState<boolean>(false);
    const onChange = (value: any) => {
        console.log(value);
        if (controlled) setValue(value);
    }
    
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <ButtonGroup>
                    <Button
                        variant={multiple ? 'contained' : 'outlined'}
                        onClick={() => setMultiple(true)}
                    >Multiple</Button>
                    <Button
                        variant={!multiple ? 'contained' : 'outlined'}
                        onClick={() => setMultiple(false)}
                    >Single</Button>
                </ButtonGroup>
                <FormControlLabel
                    label="controlled"
                    control={<Checkbox
                        checked={controlled}
                        onChange={e => setControlled(e.target.checked)}
                    />}
                />
            </Stack>
            <TreeSelect
                label="Controlled"
                options={treeData}
                fullWidth
                multiple={multiple}
                value={controlled ? value : null}
                onChange={onChange}
            />
        </Stack>
    )
}