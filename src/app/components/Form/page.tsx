"use client"
import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import { NavItem } from 'components/ContentNav';
import Basic from './Basic';
import { code as basicCode } from './Basic/code';
import Layout from './Layout';
import { code as layoutCode } from './Layout/code';
import Method from './Method';
import { code as methodCode } from './Method/code';
import Complex from './Complex';
import { code as complexCode } from './Complex/code';
import Size from './Size';
import { code as sizeCode } from './Size/code';
import Disabled from './Diasbled';
import { code as diasbledCode } from './Diasbled/code';
import ApiTable from './ApiTable';

const NavList: NavItem[] = [
    {
        name: 'Basic',
        desc: 'Basic usage of Form component',
        element: <Basic />,
        code: basicCode,
        simpleCode: ''
    },
    {
        name: 'Layout',
        desc: 'Offer two kinds of layout types, Stack and Grid',
        element: <Layout />,
        code: layoutCode,
        simpleCode: ''
    },
    {
        name: 'Method',
        desc: 'Provide Form instance contain many useful methods',
        element: <Method />,
        code: methodCode,
        simpleCode: ''
    },
    {
        name: 'Complex',
        desc: 'Flexble way to manage complex form items',
        element: <Complex />,
        code: complexCode,
        simpleCode: ''
    },
    {
        name: 'Size',
        desc: 'Set the size of form components',
        element: <Size />,
        code: sizeCode,
        simpleCode: ''
    },
    {
        name: 'Disabled',
        desc: 'Set form disabled',
        element: <Disabled />,
        code: diasbledCode,
        simpleCode: ''
    },
]

export default function FormPage() {
    const [curNav, setCurNav] = React.useState('');
    return (
        <>
            <Container maxWidth="md">
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Typography variant='h3' fontWeight="bold">Form</Typography>
                    <Typography variant='body1'>
                        Form component with state management, include data input, validation and layout
                    </Typography>
                    <Typography variant='h4' fontWeight="bold">When to use</Typography>
                    <Typography>
                        1.Used to create an entity or collect information;<br />
                        2.Need to validate the user input data.
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