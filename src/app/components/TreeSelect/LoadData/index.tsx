"use client"
import { TreeSelect } from "@akamuinsaner/mr-components";
import { TreeSelectOption } from "@akamuinsaner/mr-components/TreeSelect";
import { v4 as uuidV4 } from 'uuid';

const treeData = [
    {
        id: uuidV4(),
        name: 'expand to load',
    },
];

const loadedData = () => [
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
    const loadData = (o: TreeSelectOption) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        }).then(() => {
            return loadedData();
        })
    }
    return (
        <TreeSelect
            label="Load data"
            options={treeData}
            fullWidth
            loadData={loadData}
        />
    )
}