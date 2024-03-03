// src/App.tsx

import React, { useState } from 'react';
import StepForm from './components/StepForm';
import TopBar from './components/TopBar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  return (
    <div className="app-container">
      <TopBar />
      <LeftSidebar/>

      <div className="main-content">
        <StepForm
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <RightSidebar/>

      <div className="bottom-panel">
        {/* Previous and Next buttons logic here */}
      </div>
    </div>
  );
};

export default App;