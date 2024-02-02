import React from 'react';
import { message } from '@akamuinsaner/mr-components';
import { MessageProvider } from '@akamuinsaner/mr-components/Message';
import { Button } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function Basic() {
    const showMessage = () => {
        message.info('this is an info message', {
            icon: <AccessAlarmIcon />
        });
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