// src/components/LeftSidebar.tsx

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
                    marginTop: '64px',
                    position: 'relative',
                },
            }}
        >
            <List>
                {formDefinition?.map((step, index) => (
                    <ListItem
                      button
                      key={step.step}
                      onClick={() => handleListItemClick(step.step)}
                      selected={currentStep === step.step}
                      sx={{
                          position: 'relative',
                          '&::before': {
                              content: '""',
                              position: 'absolute',
                              left: '25px', // Adjusted based on your feedback
                              width: '2px',
                              backgroundColor: 'gray',
                              top: index === 0 ? '50%' : '0',
                              bottom: index === formDefinition.length - 1 ? '50%' : '0',
                              zIndex: 0, // Ensure the line is behind the icons
                          }
                      }}
                    >
                        <ListItemIcon sx={{ zIndex: 1 }}>
                            <FiberManualRecordIcon 
                                fontSize="small" 
                                sx={{ 
                                    color: currentStep === step.step ? theme.palette.primary.main : 'inherit'
                                }} 
                            />
                        </ListItemIcon>
                        <ListItemText primary={step.stepName} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default LeftSidebar;
