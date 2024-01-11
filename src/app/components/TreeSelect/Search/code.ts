export const code = `
import React from 'react';
import { TreeSelect } from "@akamuinsaner/mr-components"
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

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
    const [multiple, setMultiple] = React.useState<boolean>(false);
    return (
        <>
            <ButtonGroup sx={{ marginBottom: '20px' }}>
                <Button
                    variant={multiple ? 'contained' : 'outlined'}
                    onClick={() => setMultiple(true)}
                >Multiple</Button>
                <Button
                    variant={!multiple ? 'contained' : 'outlined'}
                    onClick={() => setMultiple(false)}
                >Single</Button>
            </ButtonGroup>
            <TreeSelect
                label="Search"
                options={treeData}
                fullWidth
                search
                multiple={multiple}
                expandAll
            />
        </>
    )
}
`

export const simple = `<TreeSelect label="Search" options={treeData} size="small" fullWidth search expandAll />`