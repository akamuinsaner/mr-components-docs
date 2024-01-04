export const code = `
import React from 'react';
import { TreeSelect } from "mr-components"
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { PopperPlacementType } from '@mui/material/Popper';

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
    const placements: PopperPlacementType[] = [
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end'
    ];
    const [placement, setPlacement] = React.useState<PopperPlacementType>('top-start');
    return (
        <>
            <ButtonGroup sx={{ marginBottom: '20px' }} >
                {placements.map(p => <Button
                    variant={p === placement ? 'contained' : 'outlined'}
                    onClick={() => setPlacement(p)}
                >{p}</Button>)}
            </ButtonGroup>
            <TreeSelect
                label="Placement"
                options={treeData}
                size="small"
                fullWidth
                placement={placement}
                popperStyle={{
                    width: '200px'
                }}
            />
        </>
    )
}
`

export const simple = `<TreeSelect label="Placement" options={treeData} size="small" fullWidth placement={placement} />`