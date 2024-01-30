"use client";
import React from 'react';
import Box from '@mui/material/Box';
import styles from './index.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export type NavItem = {
    name: string;
    desc?: string;
    code?: string;
    simpleCode?: string;
    element?: React.ReactNode;
    useElement?: boolean;
}

export type Props = {
    navs: NavItem[];
    curNav?: string;
}

export default function ContentNav ({
    navs,
    curNav
}: Props) {
    const [curHash, setCurHash] = React.useState('')

    React.useEffect(() => {
        setCurHash(`#${curNav}`);
    }, [curNav]);

    return (
        <Box
            className={styles.contentNav}
            sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                    display: 'none'
                }
            })}
        >
            <Typography variant="body2">CONTENTS</Typography>
            <List>
                {navs.map(nav => {
                    const hash = `#${nav.name}`;
                    const selected = hash === curHash;
                    return (
                        <ListItem
                            component={'a'}
                            key={hash}
                            selected={selected}
                            href={`#${nav.name}`}
                            onClick={() => setCurHash(hash)}
                            sx={{
                                fontSize: '14px',
                                '&:hover': {
                                    color: "#6B7A90",
                                    borderLeft: '1px solid #B0B8C4',
                                }
                            }}
                        >{nav.name}
                        </ListItem>

                    )
                })}
            </List>
        </Box>
    )
}