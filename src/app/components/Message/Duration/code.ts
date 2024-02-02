export const code = `
import React from 'react';
import { Button } from '@mui/material';
import { message } from '@akamuinsaner/mr-components';
import { MessageProvider } from '@akamuinsaner/mr-components/Message';

export default function Duration() {
    const showMessage = () => {
        message.info('this is a 10s message', {
            duration: 10000
        });
    }

    return (
        <MessageProvider>
            <Button
                variant='contained'
                onClick={showMessage}
            >customized duration</Button>
        </MessageProvider>
    )
}
`