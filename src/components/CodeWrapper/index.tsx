import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import Editor from 'react-simple-code-editor';
//@ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { registerPreset, availablePresets, transform } from '@babel/standalone';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

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
    const ref = React.useRef(null);
    let timer: NodeJS.Timeout;
    const [codeString, setCodeString] = React.useState<string>(code);
    const [codeOpen, setCodeOpen] = React.useState<boolean>(false);
    const [errMsg, setErrMsg] = React.useState<string>('');
    const toggleCodeOpen = () => setCodeOpen(!codeOpen);
    const closeSnackBar = () => setErrMsg(null);
    React.useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // try {
                // const code = `                         
                //     ${codeString}
                //     ReactDOM.render(<Basic />, document.getElementById('basic'))
                // `
                // var output = transform(code, {
                //     presets: ["env", "react"],
                // }).code;

                // console.log(output)
                // eval(output)
            // } catch (e: unknown) {
            //     const err = e as any;
            //     setErrMsg(err.message)
            // }
        }, 1000);
    }, [codeString]);

    return (
        <Stack direction="column" spacing={2}>
            <Typography variant='h5' fontWeight="bold" id={name}>{name}</Typography>
            <Typography>{description}</Typography>
            <Paper elevation={3}>
                <Box sx={{ padding: '50px 100px' }}>{children}</Box>
                <Divider />
                <Stack className={styles.operations}>
                    <IconButton onClick={toggleCodeOpen}>
                        {codeOpen ? <CodeOffIcon /> : <CodeIcon />}
                    </IconButton>
                </Stack>
                <Divider />
                <Editor
                    value={codeOpen ? codeString : codeSimple}
                    onValueChange={code => setCodeString(code)}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    disabled={!codeOpen}
                    style={{
                        fontSize: 14,
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
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