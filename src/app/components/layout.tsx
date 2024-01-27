"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navs from './navs';
import styles from './index.module.css';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default ({
    children
}: {
    children: React.ReactNode
}) => {
    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
    return (
        <>
            <AppBar
                position="fixed"
                sx={(theme) => ({
                    [theme.breakpoints.up("lg")]: {
                        display: 'none'
                    }
                })}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Paper className={styles.layout}>
                <Box
                    className={styles.navWrapper}
                    sx={(theme) => ({
                        [theme.breakpoints.down("lg")]: {
                            display: 'none'
                        }
                    })}
                >
                    <Navs />
                </Box>
                <Box
                    className={styles.contentWrapper}
                    sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                            paddingRight: 0
                        }
                    })}
                >
                    {children}
                </Box>
                <Drawer
                    anchor={"left"}
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    sx={(theme) => ({
                        [theme.breakpoints.up("lg")]: {
                            paddingTop: '80px',
                            display: 'none'
                        }
                    })}
                >
                    <Navs />
                </Drawer>
            </Paper>
        </>

    )
}