// src/App.tsx

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 

import theme from './theme';
import StepForm from './components/StepForm';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { FormDefinitionProvider } from './contexts/FormDefinitionContext';

const drawerWidth = 240;

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormDefinitionProvider>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              LiveData Booking
            </Typography>
          </Toolbar>
        </AppBar>
        <LeftSidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: `calc(100% - ${drawerWidth * 2}px)`,
            marginLeft: `${drawerWidth}px`, // Ensure main content is not under the left sidebar
          }}
        >
          <Toolbar /> {/* Offset content below the AppBar */}
          <StepForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        </Box>
        <RightSidebar />
      </Box>
      </FormDefinitionProvider>
    </ThemeProvider>
  );
};

export default App;
