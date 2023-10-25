import React from 'react';
import Button from '@mui/material/Button';

const TreatmentPlanGenerator: React.FC = () => {
  const generatePlan = () => {
    // Logic to generate treatment plan
  };

  return (
    <Button variant="contained" onClick={generatePlan}>
      Generate Treatment Plan
    </Button>
  );
};

export default TreatmentPlanGenerator;