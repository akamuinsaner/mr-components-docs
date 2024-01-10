import Paper from '@mui/material/Paper';
import Navs from './navs';

export default ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <Paper sx={{ padding: '100px 0' }}>
            <Navs />
            {children}
        </Paper>
    ) 
}