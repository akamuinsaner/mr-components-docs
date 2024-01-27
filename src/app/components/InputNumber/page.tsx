"use client"
import { Typography, Stack, Container } from '@mui/material';
import ContentNav, { NavItem } from 'components/ContentNav';
import CodeWrapper from 'components/CodeWrapper';
import Link from '@mui/material/Link';
import Basic from './Basic';

const NavList: NavItem[] = [
    {
        element: <Basic />,
        name: 'Basic',
        desc: 'Basic number input',
        code: '',
        simpleCode: ''
    }
]

export default function InputNumberPage() {
    return (
        <Container sx={{ padding: '0 0 100px' }}>
            <Stack direction="column" spacing={2}>
                <Typography variant='h3' fontWeight="bold">InputNumber</Typography>
                <Typography variant='body1'>
                    aloow input standard number
                </Typography>
                <Typography variant='h4' fontWeight="bold">When to use</Typography>
                <Typography>
                    when need to acquire standard number
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