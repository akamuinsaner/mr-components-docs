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

export default function Draggable() {
    const [data, setData] = React.useState<TreeData[]>(treeData);

    const loop = (data: TreeData[], active: any, over: any): TreeData[] => {
        if (!data) return [];
        const { id: activeId, parentId: activeParentId } = active.data.current;
        const { id: overId, parentId: overParentId } = over.data.current;
        return data.reduce((pre, cur, index) => {
            if (cur.id === overId) {
                console.log('overParentId', overParentId)
                return [...pre, {
                    ...active.data.current,
                    parentId: overParentId,
                }, {
                    ...cur,
                    children: loop(cur.children, active, over)
                }];
            }
            if (cur.id === activeId) return pre;
            return [...pre, {
                ...cur,
                children: loop(cur.children, active, over),
            }];
        }, []);
    }

    const onDrop = (active: any, over: any) => {
        const newData = loop(data, active, over);
        setData(newData);
    }

    return (
        <Tree
            blockNodes
            draggable
            treeData={data}
            onDrop={onDrop}
            defaultExpandedKeys={['0-0', '0-0-0', '0-0-1']}
            sx={{
                width: '500px'
            }}
        />

    )
}