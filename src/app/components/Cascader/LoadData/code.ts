export const code = `
import React from 'react';
import { Cascader } from "@akamuinsaner/mr-components";
import { CascaderOption } from "@akamuinsaner/mr-components/Cascader";
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
    const [data, setData] = React.useState<CascaderOption[]>(treeData);

    const formatRemoteData = (
        id: CascaderOption["id"],
        remoteData: CascaderOption[],
        list: CascaderOption[]
    ): CascaderOption[] => {
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

    const loadData = (o: CascaderOption) => {
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
        <Cascader
            label="Load data"
            options={data}
            fullWidth
            loadData={loadData}
        />
    )
}
`

export const simple = `
<Cascader
    label="Load data"
    options={data}
    fullWidth
    loadData={loadData}
/>
`