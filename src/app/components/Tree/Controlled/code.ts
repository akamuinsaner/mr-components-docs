export const code = `
import React from 'react';
import { Tree } from '@akamuinsaner/mr-components';
import { TreeData } from '@akamuinsaner/mr-components/Tree';

const treeData: TreeData[] = [
    {
        name: '0-0',
        id: '0-0',
        children: [
            {
                name: '0-0-0',
                id: '0-0-0',
                children: [
                    { name: '0-0-0-0', id: '0-0-0-0' },
                    { name: '0-0-0-1', id: '0-0-0-1' },
                    { name: '0-0-0-2', id: '0-0-0-2' },
                ],
            },
            {
                name: '0-0-1',
                id: '0-0-1',
                children: [
                    { name: '0-0-1-0', id: '0-0-1-0' },
                    { name: '0-0-1-1', id: '0-0-1-1' },
                    { name: '0-0-1-2', id: '0-0-1-2' },
                ],
            },
            {
                name: '0-0-2',
                id: '0-0-2',
            },
        ],
    },
    {
        name: '0-1',
        id: '0-1',
        children: [
            { name: '0-1-0-0', id: '0-1-0-0' },
            { name: '0-1-0-1', id: '0-1-0-1' },
            { name: '0-1-0-2', id: '0-1-0-2' },
        ],
    },
    {
        name: '0-2',
        id: '0-2',
    },
];

export default () => {
    const [expandedKeys, setExpandedKeys] = React.useState<Array<string | number>>(['0-0', '0-1', '0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = React.useState<Array<string | number>>(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = React.useState<Array<string | number>>([]);

    const onSelect = (selectedKeys: Array<number | string>, selected: boolean, node: TreeData) => {
        console.log('setSelectedKeys', selectedKeys, selected, node);
        setSelectedKeys(selectedKeys);
    }

    const onCheck = (checkedKeys: Array<number | string>, checked: boolean, node: TreeData) => {
        console.log('setCheckedKeys', checkedKeys, checked, node);
        setCheckedKeys(checkedKeys);
    }

    const onExpand = (expandedKeys: Array<number | string>, expanded: boolean, node: TreeData) => {
        console.log('setExpandedKeys', expandedKeys, expanded, node);
        setExpandedKeys(expandedKeys);
    }

    return (
        <Tree
            checkable
            checkWithRelation
            treeData={treeData}
            expandedKeys={expandedKeys}
            checkedKeys={checkedKeys}
            selectedKeys={selectedKeys}
            onSelect={onSelect}
            onCheck={onCheck}
            onExpand={onExpand}
        />
    )
}
`