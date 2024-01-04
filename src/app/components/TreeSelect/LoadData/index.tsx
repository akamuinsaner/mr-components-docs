"use client"
import { TreeSelect, TreeSelectOption } from "mr-components";
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



export default () => {
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