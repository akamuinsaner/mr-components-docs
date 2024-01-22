"use client"
import { Typography, Stack, Container } from '@mui/material';
import Basic from './Basic';
import { code as basicCode, simple as simpleBasicCode } from './Basic/code';
import ExpandAll from './ExpandAll';
import { code as expandCode, simple as simpleExpandCode } from './ExpandAll/code';
import Multiple from './Multiple';
import { code as multipleCode, simple as simpleMultipleCode } from './Multiple/code';
import MaxTagCount from './MaxTagCount';
import { code as tagCountCode, simple as simpleTagCount } from './MaxTagCount/code';
import Placement from './Placement';
import { code as placementCode, simple as simplePlacement } from './Placement/code';
import Controlled from './Controlled';
import { code as controlledCode, simple as simpleControlled } from './Controlled/code';
import Checkable from './Checkable';
import { code as checkableCode, simple as simpleCheckable } from './Checkable/code';
import LoadData from './LoadData';
import { code as loadDataCode, simple as simpleLoadData } from './LoadData/code';
import Search from './Search';
import { code as searchCode, simple as simpleSearch } from './Search/code';
import Size from './Size';
import { code as sizeCode, simple as simpleSize } from './Size/code';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import ApiTable from './ApiTable';

const NavList = [
    {
        name: 'Basic',
        desc: 'The most basic usage of TreeSelect component',
        element: <Basic />,
        code: basicCode,
        simpleCode: simpleBasicCode
    },
    {
        name: 'Size',
        desc: 'Provide two different sizes, small and medium',
        element: <Size />,
        code: sizeCode,
        simpleCode: simpleSize
    },
    {
        name: 'ExpandAll',
        element: <ExpandAll />,
        desc: 'Expand all tree leafs when open the component popper',
        code: expandCode,
        simpleCode: simpleExpandCode
    },
    {
        name: 'Multiple',
        element: <Multiple />,
        desc: 'Allow to select multiple values',
        code: multipleCode,
        simpleCode: simpleMultipleCode
    },
    {
        name: 'Placement',
        element: <Placement />,
        desc: 'Change the placement of TreeSelect popper',
        code: placementCode,
        simpleCode: simplePlacement
    },
    {
        name: 'Controlled',
        element: <Controlled />,
        desc: 'Provide value and onChange to make TreeSelect controllable',
        code: controlledCode,
        simpleCode: simpleControlled
    },
    {
        name: 'MaxTagCount',
        element: <MaxTagCount />,
        desc: 'Limit the count of tags while in multiple mode',
        code: tagCountCode,
        simpleCode: simpleTagCount
    },
    {
        name: 'Checkable',
        element: <Checkable />,
        desc: 'Realise multiple select function through Checkbox',
        code: checkableCode,
        simpleCode: simpleCheckable
    },
    {
        name: 'LoadData',
        element: <LoadData />,
        desc: 'Load data asynchnorously from remote',
        code: loadDataCode,
        simpleCode: simpleLoadData
    },
    {
        name: 'Search',
        element: <Search />,
        desc: 'Allow searching through user input',
        code: searchCode,
        simpleCode: simpleSearch
    },
]

export default () => {
    return (
        <Container maxWidth="md">
            <Stack direction="column" spacing={2}>
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
                    >
                        {nav.element}
                    </CodeWrapper>
                ))}
            </Stack>
            <ApiTable />
            <ContentNav
                navs={NavList}
            />
        </Container>
    )
}