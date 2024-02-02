'use client'
import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import Checkbox from '@mui/material/Checkbox';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeEditor from './CodeEditor';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { v4 as uuidV4 } from 'uuid';
import ReactDom from 'react-dom/client';
import * as Babel from '@babel/standalone';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import { Cascader, TreeSelect, Form, RecordTable, Tree, message } from '@akamuinsaner/mr-components';
import { MessageProvider } from '@akamuinsaner/mr-components/Message';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const trimCode = (codeString: string) => {
    return codeString
        .replace(/export default/, 'const App =')
        .replace(/"use strict".*\n/g, '')
        .replace(/import[\s\S]*?('.*'|".*");?/g, '');
}


const transpileTSX = (input: string) => {
    return Babel.transform(trimCode(input), {
        filename: 'file.ts',
        presets: [['typescript', {
            isTSX: true,
            allExtensions: true
        }], 'react', 'es2015'],
    }).code;
}

export default function CodeWrapper ({
    name,
    description,
    children,
    code,
    codeSimple,
    setCurNav,
    useElement
}: {
    name: string;
    description?: React.ReactNode | string;
    children?: React.ReactNode,
    code: string;
    codeSimple?: string;
    setCurNav?: (nav: string) => void;
    useElement?: boolean;
}) {
    const anchorRef = React.useRef(null);
    const codeTimer = React.useRef<NodeJS.Timeout>(null)
    const containerRef = React.useRef(null);
    const [codeString, setCodeString] = React.useState<string>(code);
    const [codeOpen, setCodeOpen] = React.useState<boolean>(true);
    const [errMsg, setErrMsg] = React.useState<string>('');
    const toggleCodeOpen = () => setCodeOpen(!codeOpen);
    const closeSnackBar = () => setErrMsg(null);

    React.useEffect(() => {
        let observer = new IntersectionObserver((entries, observer) => {
            if (entries && entries.length && entries[0].isIntersecting) {
                setCurNav(name);
            }
        }, {
            root: document.querySelector("#scrollArea"),
            rootMargin: "-100px",
            threshold: 0,
        });
        observer.observe(anchorRef.current)
        return () => {
            anchorRef.current && observer.unobserve(anchorRef.current);
        }
    }, []);

    React.useEffect(() => {
        if (useElement) return;
        clearTimeout(codeTimer.current);
        codeTimer.current = setTimeout(() => {
            try {
                setErrMsg('');
                const output = transpileTSX(codeString);
                const func = new Function(
                    'React',
                    'Cascader',
                    'Button',
                    'ButtonGroup',
                    'Stack',
                    'AddIcon',
                    'RemoveIcon',
                    'FormControlLabel',
                    'Checkbox',
                    'uuidV4',
                    'TreeSelect',
                    'Form',
                    'TextField',
                    'FormControl',
                    'InputLabel',
                    'OutlinedInput',
                    'InputAdornment',
                    'FormHelperText',
                    'Visibility',
                    'VisibilityOff',
                    'IconButton',
                    'MenuItem',
                    'FormLabel',
                    'Switch',
                    'Radio',
                    'RadioGroup',
                    'RecordTable',
                    'Link',
                    'Divider',
                    'Box',
                    'Typography',
                    'Grid',
                    'Tree',
                    'message',
                    'MessageProvider',
                    'AccessAlarmIcon',
                    `${output} return App`,
                );
                const App = func(
                    React,
                    Cascader,
                    Button,
                    ButtonGroup,
                    Stack,
                    AddIcon,
                    RemoveIcon,
                    FormControlLabel,
                    Checkbox,
                    uuidV4,
                    TreeSelect,
                    Form,
                    TextField,
                    FormControl,
                    InputLabel,
                    OutlinedInput,
                    InputAdornment,
                    FormHelperText,
                    Visibility,
                    VisibilityOff,
                    IconButton,
                    MenuItem,
                    FormLabel,
                    Switch,
                    Radio,
                    RadioGroup,
                    RecordTable,
                    Link,
                    Divider,
                    Box,
                    Typography,
                    Grid,
                    Tree,
                    message,
                    MessageProvider,
                    AccessAlarmIcon
                );
                const root = ReactDom.createRoot(containerRef.current);
                root.render(<App />);
            } catch (e: any) {
                setErrMsg(e.message);
            }

        }, 300);
    }, [codeString]);
    return (
        <Stack direction="column" spacing={2}>
            <Typography
                variant='h5'
                fontWeight="bold"
                id={name}
                ref={anchorRef}
            >{name}</Typography>
            <Typography>{description}</Typography>
            <Paper elevation={3}>
                <Box ref={containerRef} sx={{ padding: '40px 40px' }}>
                    {children}
                </Box>
                <Divider />
                <Stack className={styles.operations}>
                    <IconButton onClick={toggleCodeOpen}>
                        {codeOpen ? <CodeOffIcon /> : <CodeIcon />}
                    </IconButton>
                </Stack>
                <Divider />
                {(codeOpen || codeSimple) ? <CodeEditor
                    value={codeOpen ? codeString : codeSimple}
                    disabled={!codeOpen}
                    onChange={setCodeString}
                /> : null}
                {errMsg ? <Alert onClose={closeSnackBar} severity="error" sx={{ width: '100%' }}>
                    {errMsg}
                </Alert> : null}
                <Divider />
            </Paper>
        </Stack>
    )
}