'use client'
import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeEditor from './CodeEditor';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import ReactDom from 'react-dom';
import * as Babel from '@babel/standalone';
import * as mrComponents from "@akamuinsaner/mr-components";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default ({
    children,
    name,
    description,
    code,
    codeSimple
}: {
    children: React.ReactNode;
    name: string;
    description?: React.ReactNode | string;
    code: string;
    codeSimple?: string;
}) => {
    const containerRef = React.useRef(null);
    const [codeString, setCodeString] = React.useState<string>(code);
    const [codeOpen, setCodeOpen] = React.useState<boolean>(true);
    const [errMsg, setErrMsg] = React.useState<string>('');
    const toggleCodeOpen = () => setCodeOpen(!codeOpen);
    const closeSnackBar = () => setErrMsg(null);

    // React.useEffect(() => {
    //     try {
    //         const output = Babel.transform(codeString, { presets: ['react', 'es2015'] }).code;
    //         const code = output.replace('"use strict";', "").trim();
    //         console.log(code)
    //         const func = new Function(`return ${code}`);
    //         console.log(func());
    //         // ReactDom.render(<Basic />, containerRef.current);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, [codeString]);
    return (
        <Stack direction="column" spacing={2}>
            <Typography variant='h5' fontWeight="bold" id={name}>{name}</Typography>
            <Typography>{description}</Typography>
            <Paper elevation={3}>
                <Box sx={{ padding: '50px 100px' }}>
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
                    disabled={true}
                    onChange={setCodeString}
                /> : null}
                <Divider />
            </Paper>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={!!errMsg}
                autoHideDuration={2000}
                onClose={closeSnackBar}
            >
                <Alert onClose={closeSnackBar} severity="error" sx={{ width: '100%' }}>
                    {errMsg}
                </Alert>
            </Snackbar>
        </Stack>
    )
}