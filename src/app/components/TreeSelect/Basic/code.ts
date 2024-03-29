export const simple = `
<TreeSelect
    label="Basic"
    options={treeData}
    fullWidth
    onChange={onChange}
/>
`;

export const code = `
import { TreeSelect } from "@akamuinsaner/mr-components";

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
                        name: 'leaf3',
                    },
                ],
            },
        ],
    },
];

export default function Basic() {
    const onChange = (value: any) => {
        console.log(value)
    }
    
    return (
        <TreeSelect
            label="Basic"
            options={treeData}
            fullWidth
            onChange={onChange}
        />
    )
}
`