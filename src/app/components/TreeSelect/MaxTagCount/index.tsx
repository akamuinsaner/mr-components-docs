"use client"
import React from 'react';
import { TreeSelect } from "@akamuinsaner/mr-components";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

export default function MaxTagCount() {
    const [count, setCount] = React.useState<number>(4);
    const [isResponsive, setIsResponsive] = React.useState<boolean>(false);
    const maxTagCount = isResponsive ? 'responsive' : count
    return (
        <>
            <Stack
                direction="row"
                spacing={2}
                sx={{ marginBottom: '20px' }}
            >
                <Button variant='text'>{maxTagCount}</Button>
                <ButtonGroup size="small">
                    <Button onClick={() => setCount(count + 1)}><AddIcon /></Button>
                    <Button onClick={() => setCount(count - 1)}><RemoveIcon /></Button>
                </ButtonGroup>
                <FormControlLabel
                    control={<Checkbox
                        checked={isResponsive}
                        onChange={(e) => setIsResponsive(e.target.checked)}
                    />}
                    label="responsive"
                />
            </Stack>
            <TreeSelect
                label="Max Tag Count"
                options={treeData}
                fullWidth
                multiple
                maxTagCount={maxTagCount}
                allowClear
            />
        </>

    )
}