export const code = `
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TreeSelect, { TreeSelectOption } from "@akamuinsaner/mr-components/TreeSelect";

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
    const [size, setSize] = React.useState<'small' | 'medium'>('medium')

    return (
        <>
            <ButtonGroup sx={{ marginBottom: '20px' }}>
                <Button
                    variant={size === 'small' ? 'contained' : 'outlined'}
                    onClick={() => setSize('small')}
                >Small</Button>
                <Button
                    variant={size === 'medium' ? 'contained' : 'outlined'}
                    onClick={() => setSize('medium')}
                >Medium</Button>
            </ButtonGroup>
            <TreeSelect
                label="Size"
                options={treeData}
                fullWidth
                size={size}
                multiple
            />
        </>

    )
}
`

export const simple = `<TreeSelect label="Size" options={treeData} fullWidth size={size} multiple />`