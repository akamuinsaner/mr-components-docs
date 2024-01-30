export const code = `
import React from 'react';
import { TreeSelect } from "@akamuinsaner/mr-components";
import { Stack, Checkbox, FormControlLabel } from "@mui/material";

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

export default function ExpandAll() {
    const defaultExpandedKeys = ['parent 1', 'parent 1-0', 'parent 1-1'];
    const [controlled, setControlled] = React.useState<boolean>(false);
    const [expandedKeys, setExpandedKeys] = React.useState<Array<number | string>>([]);
    const onExpand = (keys: Array<number | string>) => {
        console.log(keys);
        if (controlled) setExpandedKeys(keys);
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
                    label="controlled"
                    control={<Checkbox
                        checked={controlled}
                        onChange={e => setControlled(e.target.checked)}
                    />}
                />
            </Stack>
            <TreeSelect
                label="Expand"
                options={treeData}
                fullWidth
                defaultExpandedKeys={defaultExpandedKeys}
                expandedKeys={controlled ? expandedKeys : null}
                onExpand={onExpand}
            />
        </Stack>
    )
}
`

export const simple = `
<TreeSelect
    label="Expand"
    options={treeData}
    size="small"
    fullWidth
    defaultExpandedKeys={defaultExpandedKeys}
    expandedKeys={expandedKeys}
    onExpand={onExpand}
/>`