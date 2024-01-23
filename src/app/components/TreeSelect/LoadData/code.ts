export const code = `
import TreeSelect, { TreeSelectOption } from "@akamuinsaner/mr-components/TreeSelect";
import { v4 as uuidV4 } from 'uuid';

const treeData: TreeSelectOption[] = [
    {
        id: uuidV4(),
        name: 'expand to load',
    },
];

const loadedData = (): TreeSelectOption[] => [
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
    const loadData = (o: TreeSelectOption): Promise<TreeSelectOption[]> => {
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
`

export const simple = `<TreeSelect label="Load data" options={treeData} size="small" fullWidth loadData={loadData} />`