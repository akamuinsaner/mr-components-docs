import React from 'react';
import { Button, SnackbarProps, TextField, Stack, MenuItem } from '@mui/material';
import { message } from '@akamuinsaner/mr-components';
import { MessageProvider } from '@akamuinsaner/mr-components/Message';

export default function Placement() {
    const [
        placement,
        setPlacement,
    ] = React.useState<SnackbarProps["anchorOrigin"]>({
        vertical: 'top',
        horizontal: 'center',
    });
    const showMessage = () => {
        message.info('this is a message of customized placement', {
            placement
        });
    }

    return (
        <MessageProvider>
            <Stack direction="row" spacing={2}>
                <TextField
                    select
                    label="vertical"
                    size="small"
                    value={placement.vertical}
                    onChange={e => setPlacement({
                        ...placement,
                        vertical: e.target.value as any
                    })}
                >
                    <MenuItem value="top">top</MenuItem>
                    <MenuItem value="bottom">bottom</MenuItem>
                </TextField>
                <TextField
                    select
                    label="horizontal"
                    size="small"
                    value={placement.horizontal}
                    onChange={e => setPlacement({
                        ...placement,
                        horizontal: e.target.value as any
                    })}
                >
                    <MenuItem value="left">left</MenuItem>
                    <MenuItem value="center">center</MenuItem>
                    <MenuItem value="right">right</MenuItem>
                </TextField>
                <Button
                    variant='contained'
                    onClick={showMessage}
                >customized placement</Button>
            </Stack>
        </MessageProvider>
    )
}