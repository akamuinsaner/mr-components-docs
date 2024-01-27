import React from 'react';
import Box from '@mui/material/Box';
import Editor from 'react-simple-code-editor';
//@ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-solarizedlight.min.css'; //Example style, you can use another
import styles from './index.module.css';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default ({
    value,
    disabled,
    onChange
}: {
    value: string;
    disabled: boolean;
    onChange: (code: string) => void;
}) => {
    return (
        <Box className={styles.editWrapper}>
            <IconButton
            className={styles.copyBtn}
            size="small"
            onClick={() => {
                navigator.clipboard.writeText(value);
            }}
            >
                <ContentCopyIcon fontSize="small"/>
            </IconButton>
            <Editor
                value={value}
                onValueChange={code => onChange(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                disabled={disabled}
                style={{
                    fontSize: 14,
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </Box>

    )
}