"use client"
import { Typography, Stack, Container } from '@mui/material';
import ContentNav from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import { NavItem } from 'components/ContentNav';
import Basic from './Basic';
import Layout from './Layout';
import Method from './Method';
import Complex from './Complex';
import Size from './Size';
import Disabled from './Diasbled';

const NavList: NavItem[] = [
    {
        name: 'Basic',
        desc: 'Basic usage of Form component',
        element: <Basic />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Layout',
        desc: 'Offer two kinds of layout types',
        element: <Layout />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Method',
        desc: 'Provide Form instance contain multiple useful methods',
        element: <Method />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Complex',
        desc: 'Flexble way to manage complex form',
        element: <Complex />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Size',
        desc: 'Set the size of form components',
        element: <Size />,
        code: '',
        simpleCode: ''
    },
    {
        name: 'Disabled',
        desc: 'Set form disabled',
        element: <Disabled />,
        code: '',
        simpleCode: ''
    },
]

export default () => {
    return (
        <Container sx={{ padding: '0 0 100px' }}>
            <Stack direction="column" spacing={2}>
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