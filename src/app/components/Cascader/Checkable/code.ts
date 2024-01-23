export const simple = `<Cascader label="Checkable" options={treeData} fullWidth multiple checkable allowClear />`;

export const code = `
import Cascader, { CascaderOption } from '@akamuinsaner/mr-components/Cascader';

const treeData: CascaderOption[] = [
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
        <Cascader
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