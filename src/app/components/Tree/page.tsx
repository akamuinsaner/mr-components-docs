"use client"
import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Basic from './Basic';
import { code as basicCode } from './Basic/code';
import Controlled from './Controlled';
import { code as controllCode } from './Controlled/code';
import ShowLine from './ShowLine';
import { code as showLineCode } from './ShowLine/code';
import Draggable from './Draggable';
import { code as draggableCode } from './Draggable/code';
import LoadData from './loadData';
import { code as loadDataCode } from './loadData/code';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import ApiTable from './ApiTable';

const NavList = [
    {
        name: 'Basic',
        desc: 'The most basic usage of Tree component',
        element: <Basic />,
        code: basicCode,
        simpleCode: ''
    },
    {
        name: 'Controlled',
        desc: 'Controlled Tree component',
        element: <Controlled />,
        code: controllCode,
        simpleCode: ''
    },
    {
        name: 'ShowLine',
        desc: 'There are lines between each two nodes, usally used to show folder structure',
        element: <ShowLine />,
        code: showLineCode,
        simpleCode: ''
    },
    {
        name: 'Draggable',
        desc: 'Draggable Tree',
        element: <Draggable />,
        code: draggableCode,
        simpleCode: ''
    },
    {
        name: 'Load data',
        desc: 'Load remote data',
        element: <LoadData />,
        code: loadDataCode,
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
                    <Typography variant='h3' fontWeight="bold">Tree</Typography>
                    <Typography variant='body1'>
                        Tree like Component
                    </Typography>
                    <Typography variant='h4' fontWeight="bold">When to use</Typography>
                    <Typography>
                        when the used data structure is tree like
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
                <ApiTable />
            </Container>
            <ContentNav
                navs={NavList}
                curNav={curNav}
            />
        </>
    )
}