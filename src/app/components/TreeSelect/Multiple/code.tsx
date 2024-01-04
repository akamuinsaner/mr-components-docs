export const code = `
import { TreeSelect } from "mr-components"

const treeData = [
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
                        name: <b style={{ color: '#08c' }}>leaf3</b>,
                    },
                ],
            },
        ],
    },
];

export default () => {
    return (
        <TreeSelect
            label="Multiple"
            options={treeData}
            size="small"
            fullWidth
            multiple
            allowClear
        />
    )
}
`

export const simple = `<TreeSelect label="Multiple" options={treeData} size="small" fullWidth, multiple allowClear />`