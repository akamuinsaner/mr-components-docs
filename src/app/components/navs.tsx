'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from './index.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const components = [
    'Form',
    'Cascader',
    "TreeSelect",
    "RecordTable",
    "Tree",
    "Message"
]

export default function ComponentNavs() {
    const pathname= usePathname();
    const curPathMatch = pathname.match(/\/components\/(.*)(\/)?(.*)?/);
    const [selected, setSelected] = React.useState<string>(curPathMatch && curPathMatch[1]);
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
                            className={classNames(styles.navItem, {
                                [styles.selected]: selected === c
                            })}
                        >{c}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}