import React from 'react';
import { Tree } from '@akamuinsaner/mr-components';
import { TreeData } from '@akamuinsaner/mr-components/Tree';
import { Stack, Switch, FormControlLabel } from '@mui/material';

const treeData: TreeData[] = [
    {
        name: 'parent 1',
        id: '0-0',
        children: [
            {
                name: 'parent 1-0',
                id: '0-0-0',
                children: [
                    { name: 'leaf', id: '0-0-0-0' },
                    {
                        name: (
                            <>
                                <div>multiple line name</div>
                                <div>multiple line name</div>
                            </>
                        ),
                        id: '0-0-0-1',
                    },
                    { name: 'leaf', id: '0-0-0-2' },
                ],
            },
            {
                name: 'parent 1-1',
                id: '0-0-1',
                children: [{ name: 'leaf', id: '0-0-1-0' }],
            },
            {
                name: 'parent 1-2',
                id: '0-0-2',
                children: [
                    { name: 'leaf', id: '0-0-2-0' },
                    {
                        name: 'leaf',
                        id: '0-0-2-1',
                    },
                ],
            },
        ],
    },
    {
        name: 'parent 2',
        id: '0-1',
        children: [
            {
                name: 'parent 2-0',
                id: '0-1-0',
                children: [
                    { name: 'leaf', id: '0-1-0-0' },
                    { name: 'leaf', id: '0-1-0-1' },
                ],
            },
        ],
    },
];

export default function ShowLine() {
    const [showLine, setShowLine] = React.useState<boolean>(true);
    const [showIcon, setShowIcon] = React.useState<boolean>(false);
    const [showLeafIcon, setShowLeafIcon] = React.useState<React.ReactNode>(true);

    const onSelect = (selectedKeys: React.Key[], selected: boolean, node: TreeData) => {
        console.log('selected', selectedKeys, selected, node);
    };

    return (
        <Stack direction="column" spacing={2}>
            <FormControlLabel label="showLine" control={<Switch
                checked={showLine} onChange={e => setShowLine(e.target.checked)}
            />} />
            <Tree
                defaultExpandedKeys={['0-0', '0-1', '0-0-0', '0-0-1', '0-0-2']}
                onSelect={onSelect}
                treeData={treeData}
                showLine={showLine}
            />
        </Stack>

    )
}