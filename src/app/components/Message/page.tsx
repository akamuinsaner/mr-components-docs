"use client"
import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Basic from './Basic';
import { code as codeBasic } from './Basic/code';
import Others from './Others';
import { code as codeOthers } from './Others/code';
import Duration from './Duration';
import { code as codeDuration } from './Duration/code';
import Placement from './Placement';
import { code as codePlacement } from './Placement/code';
import Icon from './Icon';
import { code as codeIcon } from './Icon/code';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';


const NavList = [
    {
        name: 'Basic',
        desc: 'The most basic usage of message',
        element: <Basic />,
        code: codeBasic,
        simpleCode: ''
    },
    {
        name: 'Others',
        desc: 'Other three kinds of messages',
        element: <Others />,
        code: codeOthers,
        simpleCode: ''
    },
    {
        name: 'Duration',
        desc: 'customized duration message',
        element: <Duration />,
        code: codeDuration,
        simpleCode: ''
    },
    {
        name: 'Placement',
        desc: 'customized Placement',
        element: <Placement />,
        code: codePlacement,
        simpleCode: ''
    },
    {
        name: 'Icon',
        desc: 'customized Icon',
        element: <Icon />,
        code: codeIcon,
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
                    <Typography variant='h3' fontWeight="bold">Message</Typography>
                    <Typography variant='body1'>
                        Global message to show operation feedback
                    </Typography>
                    <Typography variant='h4' fontWeight="bold">When to use</Typography>
                    <Typography>
                        Provide message types like success, warning, error<br />
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