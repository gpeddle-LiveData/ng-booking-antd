// src/components/RightSidebar.tsx

import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const RightSidebar: React.FC = () => {
    const theme = useTheme();

    return (
        <Drawer
            variant="permanent"
            anchor="right"
            border-color="primary"
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
            <Stack
                spacing={2}
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ marginTop: '64px' }}
            >
                <Button variant="contained" color="primary">Save</Button>
                <Button variant="contained" color="secondary">Revert</Button>
                {/* State transition button */}
                <Button variant="contained">Send to Requested</Button>
            </Stack>
        </Drawer>
    );
};

export default RightSidebar;
