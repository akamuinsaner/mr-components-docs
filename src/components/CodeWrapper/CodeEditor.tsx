import React from 'react';
import { useActiveCode } from "@codesandbox/sandpack-react";
import Editor from 'react-simple-code-editor';
//@ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

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
    )
}