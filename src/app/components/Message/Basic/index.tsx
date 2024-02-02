import React from 'react';
import { message } from '@akamuinsaner/mr-components';
import { MessageProvider } from '@akamuinsaner/mr-components/Message';
import { Button } from '@mui/material';

export default function Basic() {
    const showMessage = () => {
        message.info('this is an info message');
    }

    return (
        <MessageProvider>
            <Button
                variant='contained'
                onClick={showMessage}
            >show message</Button>
        </MessageProvider>
    )
}