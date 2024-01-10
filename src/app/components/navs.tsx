'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from './index.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/Link';
import { usePathname } from 'next/navigation';

const components = [
    'Form',
    'Cascader',
    "TreeSelect"
]

export default () => {
    const pathname= usePathname();
    const [selected, setSelected] = React.useState<string>(pathname);
    return (
        <Box className={styles.navs}>
            <Typography
                className={styles.title}
                variant='h6'
            >CONTENTS</Typography>
            <Divider />
            <List>
                {components.map(c => (
                    <ListItem key={c} disablePadding>
                        <Link
                            href={`/components/${c}`}
                            onClick={() => setSelected(c)}
                            className={`
                                ${styles.navItem}
                                ${selected.includes(c) ? styles.selected : ''}
                            `}
                        >{c}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}