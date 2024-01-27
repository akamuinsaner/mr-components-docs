import React from 'react';
import { Tree } from '@akamuinsaner/mr-components';
import { TreeData } from '@akamuinsaner/mr-components/Tree';

const treeData: TreeData[] = [
    {
        name: 'parent 1',
        id: '0-0',
        children: [
            {
                name: 'parent 1-0',
                id: '0-0-0',
                children: [
                    {
                        name: 'leaf',
                        id: '0-0-0-0',
                    },
                    {
                        name: 'leaf',
                        id: '0-0-0-1',
                    },
                ],
            },
            {
                name: 'parent 1-1',
                id: '0-0-1',
                children: [
                    {
                        name: <span style={{ color: '#1677ff' }}>sss</span>,
                        id: '0-0-1-0'
                    }
                ],
            },
        ],
    },
];

export default function Basic() {
    const onSelect = (selectedKeys: Array<number | string>, selected: boolean, node: TreeData) => {
        console.log(selectedKeys, selected, node)
    }

    const onCheck = (checkedKeys: Array<number | string>, checked: boolean, node: TreeData) => {
        console.log(checkedKeys, checked, node)
    }

    const onExpand = (expandedKeys: Array<number | string>, expanded: boolean, node: TreeData) => {
        console.log(expandedKeys, expanded, node)
    }

    return (
        <Tree
            checkable
            checkWithRelation
            treeData={treeData}
            defaultExpandedKeys={['0-0', '0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0-0', '0-0-1-0']}
            defaultSelectedKeys={['0-0', '0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            onExpand={onExpand}
        />
    )
}