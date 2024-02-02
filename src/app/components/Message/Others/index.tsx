import React from 'react';
import { Button, Stack } from '@mui/material';
import { message } from '@akamuinsaner/mr-components';
import { MessageProvider } from '@akamuinsaner/mr-components/Message';

export default function Others() {
    const success = () => {
        message.success('this is a success message');
    }

    const warning = () => {
        message.warning('this is a warning message');
    }

    const error = () => {
        message.error('this is an error message');
    }

    return (
        <MessageProvider>
            <Stack direction="row" spacing={2}>
                <Button
                    variant='contained'
                    onClick={success}
                >Success</Button>
                <Button
                    variant='contained'
                    onClick={warning}
                >Warning</Button>
                <Button
                    variant='contained'
                    onClick={error}
                >Error</Button>
            </Stack>

        </MessageProvider>
    )
}