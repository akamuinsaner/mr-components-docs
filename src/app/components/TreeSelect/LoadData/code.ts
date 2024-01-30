export const code = `
import React from 'react';
import { TreeSelect } from "@akamuinsaner/mr-components";
import { TreeSelectOption } from "@akamuinsaner/mr-components/TreeSelect";
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

export default function LoadData () {
    const [data, setData] = React.useState<TreeSelectOption[]>(treeData);

    const formatRemoteData = (
        id: TreeSelectOption["id"],
        remoteData: TreeSelectOption[],
        list: TreeSelectOption[]
    ): TreeSelectOption[] => {
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

    const loadData = (o: TreeSelectOption) => {
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
        <TreeSelect
            label="Load data"
            options={data}
            fullWidth
            loadData={loadData}
        />
    )
}
`

export const simple = `
<TreeSelect
    label="Load data"
    options={treeData}
    fullWidth
    loadData={loadData}
/>`