import React from 'react';
import { Tree } from '@akamuinsaner/mr-components';
import { TreeData } from '@akamuinsaner/mr-components/Tree';

import { v4 as uuidV4 } from 'uuid';

const treeData = [
    {
        id: uuidV4(),
        name: 'expand to load',
    },
];

const loadRemoteData = () => [
    {
        id: uuidV4(),
        name: 'expand to load',
    },
    {
        id: uuidV4(),
        name: 'expand to load',
    },
]



export default function LoadData() {
    const [data, setData] = React.useState<TreeData[]>(treeData);

    const formatRemoteData = (
        id: TreeData["id"],
        remoteData: TreeData[],
        list: TreeData[]
    ): TreeData[] => {
        return list.map(item => {
            if (item.id === id) {
                return { ...item, children: remoteData };
            }
            if (item.children && item.children.length) {
                return {
                    ...item,
                    children: formatRemoteData(id, remoteData, item.children)
                }
            }
            return item;
        })
    }

    const loadData = (o: TreeData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        }).then(() => {
            const remoteData = loadRemoteData();
            console.log('formatRemoteData', formatRemoteData(o.id, remoteData, data))
            setData(formatRemoteData(o.id, remoteData, data));
        })
    }

    return (
        <Tree
            treeData={data}
            loadData={loadData}
        />
    )
}