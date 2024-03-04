// src/components/LeftSidebar.tsx

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const LeftSidebar: React.FC = () => {
    const theme = useTheme();
    
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 1,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    //marginTop: theme.mixins.toolbar.minHeight,
                    marginTop: '64px',
                },
            }}
        >
            <List>
                {/* TODO: dynamic list from form structure */}
                <ListItem>
                    <ListItemText primary="Patient Info" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Procedure Details" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Insurance Info" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Emergency Contact" />
                </ListItem>
            </List>
                
        </Drawer>
    );
};

export default LeftSidebar;
