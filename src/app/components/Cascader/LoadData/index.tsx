"use client"
import { Cascader } from "@akamuinsaner/mr-components";
import { CascaderOption } from "@akamuinsaner/mr-components/Cascader";
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
    const loadData = (o: CascaderOption) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        }).then(() => {
            return loadedData();
        })
    }
    return (
        <Cascader
            label="Load data"
            options={treeData}
            fullWidth
            loadData={loadData}
        />
    )
}