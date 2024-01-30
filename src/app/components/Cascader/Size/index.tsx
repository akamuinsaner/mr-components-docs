// use client
import React from 'react';
import { Cascader } from '@akamuinsaner/mr-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { TextFieldProps } from '@mui/material';

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

export default function Size() {
    const [size, setSize] = React.useState<TextFieldProps["size"]>('medium')

    return (
        <>
            <ButtonGroup sx={{ marginBottom: '20px' }}>
                <Button
                    variant={size === 'small' ? 'contained' : 'outlined'}
                    onClick={() => setSize('small')}
                >Small</Button>
                <Button
                    variant={size === 'medium' ? 'contained' : 'outlined'}
                    onClick={() => setSize('medium')}
                >Medium</Button>
            </ButtonGroup>
            <Cascader
                label="Size"
                options={treeData}
                fullWidth
                size={size}
                multiple
            />
        </>
    )
}