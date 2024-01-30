export const simple = `
<Cascader
    label="Checkable"
    options={treeData}
    fullWidth
    multiple
    checkable
    allowClear
    checkWithRelation={checkWithRelation}
    onChange={onChange}
/>
`;

export const code = `
import React from 'react';
import { Cascader } from "@akamuinsaner/mr-components";
import { Stack, FormControlLabel, Checkbox } from '@mui/material';

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



export default function Checkable() {
    const [checkWithRelation, setCheckWithRelation] = React.useState<boolean>(false);

    const onChange = (value: any) => {
        console.log(value)
    }

    return (
        <Stack
            direction="column"
            spacing={2}
        >
            <Stack
                direction="row"
                spacing={2}
            >
                <FormControlLabel
                    label="checkWithRelation"
                    control={<Checkbox
                        checked={checkWithRelation}
                        onChange={e => setCheckWithRelation(e.target.checked)}
                    />}
                />
            </Stack>
            <Cascader
                label="Checkable"
                options={treeData}
                fullWidth
                multiple
                checkable
                allowClear
                checkWithRelation={checkWithRelation}
                onChange={onChange}
            />
        </Stack>
    )
}
`