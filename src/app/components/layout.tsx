import Paper from '@mui/material/Paper';

export default ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <Paper sx={{ padding: '40px' }}>
            
            {children}
        </Paper>
    ) 
}