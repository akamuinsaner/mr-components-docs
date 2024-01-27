"use client"
import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Basic from './Basic';
import Controlled from './Controlled';
import ShowLine from './ShowLine';
import Draggable from './Draggable';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';

const NavList = [
    {
        name: 'Basic',
        desc: 'The most basic usage of Tree component',
        element: <Basic />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Controlled',
        desc: 'Controlled Tree component',
        element: <Controlled />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'ShowLine',
        desc: 'There are lines between each two nodes, usally used to show folder structure',
        element: <ShowLine />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Draggable',
        desc: 'Draggable Tree',
        element: <Draggable />,
        code: '',
        simpleCode: ''
    },
]

export default function TreePage() {
    const [curNav, setCurNav] = React.useState('');
    return (
        <>
            <Container maxWidth="md">
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Typography variant='h3' fontWeight="bold">TreeSelect</Typography>
                    <Typography variant='body1'>
                        Tree like Select
                    </Typography>
                    <Typography variant='h4' fontWeight="bold">When to use</Typography>
                    <Typography>
                        Similar to Select, when the used data structure is tree like,
                        you can use TreeSelect.
                    </Typography>
                </Stack>
                <Stack
                    direction="column"
                    spacing={8}
                    sx={{ marginTop: '80px' }}
                >
                    {NavList.map(nav => (
                        <CodeWrapper
                            key={nav.name}
                            name={nav.name}
                            description={nav.desc}
                            code={nav.code}
                            codeSimple={nav.simpleCode}
                            setCurNav={setCurNav}
                        >
                            {nav.element}
                        </CodeWrapper>
                    ))}
                </Stack>
            </Container>
            <ContentNav
                navs={NavList}
                curNav={curNav}
            />
        </>
    )
}