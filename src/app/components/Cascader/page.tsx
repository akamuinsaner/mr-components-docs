"use client"
import { Typography, Stack, Container } from '@mui/material';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import { NavItem } from 'components/ContentNav';
import Basic from './Basic';
import Size from './Size';
import Multiple from './Multiple';
import Controlled from './Controlled';
import MaxTagCount from './MaxTagCount';
import Checkable from './Checkable';
import LoadData from './LoadData';
import Search from './Search';

const NavList: NavItem[] = [
    {
        name: 'Basic',
        desc: 'Basic usage of Cascader Select',
        element: <Basic />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Multiple',
        desc: 'Support select multiple options',
        element: <Multiple />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Size',
        desc: 'Two different sizes',
        element: <Size />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Controlled',
        element: <Controlled />,
        desc: 'provide value and onChange make Cascader controllable',
        code: '',
        simpleCode: ''
    },
    {
        name: 'MaxTagCount',
        element: <MaxTagCount />,
        desc: 'Limit the count of tags while in multiple mode',
        code: '',
        simpleCode: ''
    },
    {
        name: 'Checkable',
        element: <Checkable />,
        desc: 'realise multiple select function through Checkbox',
        code: '',
        simpleCode: ''
    },
    {
        name: 'LoadData',
        element: <LoadData />,
        desc: 'Load data asynchnorously from remote',
        code: "",
        simpleCode: ""
    },
    {
        name: 'Search',
        element: <Search />,
        desc: 'allow searching through user input',
        code: "",
        simpleCode: ""
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