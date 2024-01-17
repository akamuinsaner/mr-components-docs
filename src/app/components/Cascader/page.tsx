"use client"
import { Typography, Stack, Container } from '@mui/material';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import { NavItem } from 'components/ContentNav';
import Basic from './Basic';
import { code as basicCode, simple as basicSimpleCode } from './Basic/code';
import Size from './Size';
import { code as sizeCode, simple as sizeSimpleCode } from './Size/code';
import Multiple from './Multiple';
import { code as multipleCode, simple as multipleSimpleCode } from './Multiple/code';
import Controlled from './Controlled';
import { code as controlledCode, simple as controlledSimpleCode } from './Controlled/code';
import MaxTagCount from './MaxTagCount';
import { code as maxTagCountCode, simple as maxTagCountSimpleCode } from './MaxTagCount/code';
import Checkable from './Checkable';
import { code as checkableCode, simple as checkableSimpleCode } from './Checkable/code';
import LoadData from './LoadData';
import { code as loadDataCode, simple as loadDataSimpleCode } from './LoadData/code';
import Search from './Search';
import { code as searchCode, simple as searchSimpleCode } from './Search/code';

const NavList: NavItem[] = [
    {
        name: 'Basic',
        desc: 'Basic usage of Cascader Select',
        element: <Basic />,
        code: basicCode,
        simpleCode: basicSimpleCode
    },
    {
        name: 'Multiple',
        desc: 'Support select multiple options',
        element: <Multiple />,
        code: multipleCode,
        simpleCode: multipleSimpleCode
    },
    {
        name: 'Size',
        desc: 'Two different sizes',
        element: <Size />,
        code: sizeCode,
        simpleCode: sizeSimpleCode
    },
    {
        name: 'Controlled',
        element: <Controlled />,
        desc: 'Provide value and onChange make Cascader controllable',
        code: controlledCode,
        simpleCode: controlledSimpleCode
    },
    {
        name: 'MaxTagCount',
        element: <MaxTagCount />,
        desc: 'Limit the count of tags while in multiple mode',
        code: maxTagCountCode,
        simpleCode: maxTagCountSimpleCode
    },
    {
        name: 'Checkable',
        element: <Checkable />,
        desc: 'Realise multiple select function through Checkbox',
        code: checkableCode,
        simpleCode: checkableSimpleCode
    },
    {
        name: 'LoadData',
        element: <LoadData />,
        desc: 'Load data asynchnorously from remote',
        code: loadDataCode,
        simpleCode: loadDataSimpleCode
    },
    {
        name: 'Search',
        element: <Search />,
        desc: 'Allow to search through user input',
        code: searchCode,
        simpleCode: searchSimpleCode
    },
]

export default () => {
    return (
        <Container sx={{ padding: '0 0 100px' }}>
            <Stack direction="column" spacing={2}>
                <Typography variant='h3' fontWeight="bold">Cascader</Typography>
                <Typography variant='body1'>
                    Cascader Select
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
                    >
                        {nav.element}
                    </CodeWrapper>
                ))}
            </Stack>
            <Stack
                direction="column"
                spacing={2}
                sx={{ marginTop: '80px' }}
            >
                <Typography
                    variant='h4'
                    fontWeight="bold"
                >API</Typography>
                <Typography>
                    See the documentation below for a complete reference
                    to all of the props and classes available to the components
                    mentioned here.
                </Typography>
                <Link href="https://mui.com/material-ui/react-text-field/">{`<TextField />`}</Link>
            </Stack>
            <ContentNav
                navs={NavList}
            />
        </Container>
    )
}