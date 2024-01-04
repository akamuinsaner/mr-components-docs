import React from 'react';
import Box from '@mui/material/Box';
import styles from './index.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

export type NavItem = {
    name: string;
    desc?: string;
    code?: string;
    simpleCode?: string;
    element?: React.ReactNode;
}

export type Props = {
    navs: NavItem[]
}

export default ({
    navs
}: Props) => {
    const [curHash, setCurHash] = React.useState(window.location.hash)

    return (
        <Box className={styles.contentNav}>
            <Typography variant="body2">CONTENTS</Typography>
            <List>
                {navs.map(nav => {
                    const hash = `#${nav.name}`;
                    const selected = hash === curHash;
                    return (
                        <ListItem
                            key={hash}
                            selected={selected}
                            onClick={() => setCurHash(hash)}
                            sx={{
                                '&:hover': {
                                    color: "#6B7A90",
                                    borderLeft: '1px solid #B0B8C4',
                                }
                            }}
                        >
                            <Typography variant="body2">
                                <Link href={`#${nav.name}`} >{nav.name}</Link>
                            </Typography>
                        </ListItem>

                    )
                })}
            </List>
        </Box>
    )
}