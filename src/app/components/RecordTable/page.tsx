"use client"
import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import ContentNav, { NavItem } from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import Basic from './Basic';
import { code as codeBasic, simple as simpleBasic } from './Basic/code';
import Densed from './Densed';
import { code as codeDensed, simple as simpleDensed } from './Densed/code';
import Bordered from './Bordered';
import { code as codeBordered, simple as simpleBordered } from './Bordered/code';
import Spanning from './Spanning';
import { code as codeSpanning } from './Spanning/code';
import FixedHeader from './FixedHeader';
import { code as codeFixedHeader, simple as simpleFixedHeader } from './FixedHeader/code';
import FixedColumn from './FixedColumn';
import { code as codeFixedColumn, simple as simpleFixedColumn } from './FixedColumn/code';
import FixedBoth from './FixedBoth';
import { code as codeFixedBoth, simple as simpleFixedBoth } from './FixedBoth/code';
import GroupHeader from './GroupHeader';
import { code as codeGroupHeader, simple as simpleGroupHeader } from './GroupHeader/code';
import Selectable from './Selectable';
import { code as codeSelectable, simple as simpleSelectable } from './Selectable/code';
import Expandable from './Expandable';
import { code as codeExpandable, simple as simpleExpandable } from './Expandable/code';
import Sortable from './Sortable';
import { code as codeSortable, simple as simpleSortable } from './Sortable/code';
import Filter from './Filter';
import { code as codeFilter, simple as simpleFilter } from './Filter/code';
import Paganition from './Paganition';
import { code as codePaganition, simple as simplePaganition } from './Paganition/code';
import Dropable from './Dropable';
import { code as codeDropable, simple as simpleDropable } from './Dropable/code';
import AllTogether from './AllTogether';
import { code as codeAllTogether, simple as simpleAllTogether } from './AllTogether/code';
import ApiTable from './ApiTable';

const NavList: NavItem[] = [
    {
        element: <Basic />,
        name: 'Basic',
        desc: 'Basic table with multiple operations in the last column',
        code: codeBasic,
        simpleCode: simpleBasic
    },
    {
        element: <Densed />,
        name: 'Densed table',
        desc: 'Provide two different sizes, small and medium',
        code: codeDensed,
        simpleCode: simpleDensed
    },
    {
        element: <Bordered />,
        name: 'Bordered table',
        desc: 'Allow to add border to table',
        code: codeBordered,
        simpleCode: simpleBordered
    },
    {
        element: <Spanning />,
        name: 'Spanning table',
        desc: 'Table head support merging column by colSpan in column configuration',
        code: codeSpanning,
        simpleCode: ''
    },
    {
        element: <FixedHeader />,
        name: 'Fixed header',
        desc: 'Use css sticky feature to fix the header of table',
        code: codeFixedHeader,
        simpleCode: simpleFixedHeader
    },
    {
        element: <FixedColumn />,
        name: 'Fixed columns',
        desc: 'Use css sticky feature to fix the columns of table',
        code: codeFixedColumn,
        simpleCode: simpleFixedColumn
    },
    {
        element: <FixedBoth />,
        name: 'Fixed columns and headers',
        desc: 'Use css sticky feature to fixed both columns and headers',
        code: codeFixedBoth,
        simpleCode: simpleFixedBoth
    },
    {
        element: <GroupHeader />,
        name: 'Header grouped table',
        desc: 'Add children property to column configuration to group header cells',
        code: codeGroupHeader,
        simpleCode: simpleGroupHeader
    },
    {
        element: <Selectable />,
        name: 'Selectable',
        desc: 'Provide to options to allow to select table rows',
        code: codeSelectable,
        simpleCode: simpleSelectable
    },
    {
        element: <Expandable />,
        name: 'Expandable table',
        desc: 'Allow to expand table rows to show some extra information',
        code: codeExpandable,
        simpleCode: simpleExpandable
    },
    {
        element: <Sortable />,
        name: 'Sortable table',
        desc: 'Allow to sort table data by providing some configs',
        code: codeSortable,
        simpleCode: simpleSortable
    },
    {
        element: <Filter />,
        name: 'Filterable table',
        desc: 'Allow to filter table data by providing some configs',
        code: codeFilter,
        simpleCode: simpleFilter
    },
    {
        element: <Paganition />,
        name: 'Paginated table',
        desc: 'Use pagination to controll table data display',
        code: codePaganition,
        simpleCode: simplePaganition
    },
    {
        element: <Dropable />,
        name: 'Dropable table',
        desc: 'Sort table rows by dragging and dropping',
        code: codeDropable,
        simpleCode: simpleDropable
    },
    {
        element: <AllTogether />,
        name: 'All features together',
        desc: 'Combine all features together',
        code: codeAllTogether,
        simpleCode: simpleAllTogether
    }
]

export default function RecordTablePage() {
    const [curNav, setCurNav] = React.useState('');
    return (
        <>
            <Container maxWidth="md">
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Typography variant='h3' fontWeight="bold">RecordTable</Typography>
                    <Typography variant='body1'>
                        antd like table
                    </Typography>
                    <Typography variant='h4' fontWeight="bold">When to use</Typography>
                    <Typography>
                        when a large amount of data need to be exibited<br />
                        when need to apply some complex behaviors to data like sorting, filtering, searching, paginating etc.
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