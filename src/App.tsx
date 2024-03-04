// src/App.tsx

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import theme from './theme';
import StepForm from './components/StepForm';
import TopBar from './components/TopBar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Step Form Application
            </Typography>
          </Toolbar>
        </AppBar>
        <TopBar />
        <Grid container>
          <Grid item xs={12} md={3}> {/* Sidebar */}
            <LeftSidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3}>
              <div className="main-content">
                <StepForm
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
        <RightSidebar />

        <div className="bottom-panel">
          {/* Previous and Next buttons logic here */}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
