import React from 'react';
import { Form } from '@akamuinsaner/mr-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Form
            layout="Stack"
            stackProps={{
                direction: 'column',
                spacing: 2,
            }}
        >
            <Form.Item
                name="firstName"
                rules={[{ required: true }]}
            >
                {({ value, onChange, error, helperText }) => (
                    <FormControl error={error} variant="outlined">
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            value={value}
                            onChange={onChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>)}
            </Form.Item>
            <Form.Item
                name="lastName"
                rules={[{ required: true }]}
            >
                {({ value, onChange, error, helperText }) => (
                    <FormControl error={error} variant="outlined">
                        <InputLabel>weight</InputLabel>
                        <OutlinedInput
                            label="weight"
                            value={value}
                            onChange={onChange}
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        />
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                )}
            </Form.Item>
            <Form.Submit>
                <Button variant="contained">submit</Button>
            </Form.Submit>
        </Form>
    )
}