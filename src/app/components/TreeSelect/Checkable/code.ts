export const code = `
import TreeSelect, { TreeSelectOption } from "@akamuinsaner/mr-components/TreeSelect";

const treeData: TreeSelectOption[] = [
    {
        id: 'parent 1',
        name: 'parent 1',
        children: [
            {
                id: 'parent 1-0',
                name: 'parent 1-0',
                children: [
                    {
                        id: 'leaf1',
                        name: 'leaf1',
                    },
                    {
                        id: 'leaf2',
                        name: 'leaf2',
                    },
                ],
            },
            {
                id: 'parent 1-1',
                name: 'parent 1-1',
                children: [
                    {
                        id: 'leaf3',
                        name: 'leaf3',
                    },
                ],
            },
        ],
    },
];

export default () => {
    return (
        <TreeSelect
            label="Checkable"
            options={treeData}
            fullWidth
            multiple
            checkable
            allowClear
        />
    )
}
`

export const simple = `<TreeSelect label="Checkable" options={treeData} size="small" fullWidth multiple checkble allowClear />`