// src/components/LeftSidebar.tsx

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { useFormDefinition } from '../contexts/FormDefinitionContext';

const drawerWidth = 240;

const LeftSidebar: React.FC<{ setCurrentStep: (step: number) => void; currentStep: number }> = ({ setCurrentStep, currentStep }) => {
    const theme = useTheme();
    const formDefinition = useFormDefinition();

    const handleListItemClick = (step: number) => {
        setCurrentStep(step);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box',
                    marginTop: '64px',  // Assuming the AppBar height is 64px. Adjust if your AppBar height is different
                },
            }}
        >
            <List>
                {formDefinition?.map((step) => (
                    <ListItem 
                      button 
                      key={step.step} 
                      onClick={() => handleListItemClick(step.step)}
                      selected={currentStep === step.step}
                    >
                        <ListItemText primary={step.stepName} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default LeftSidebar;
