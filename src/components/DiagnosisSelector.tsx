import React from 'react';
import { Select, MenuItem } from '@mui/material';

const DiagnosisSelector: React.FC = () => {
  const [diagnosis, setDiagnosis] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDiagnosis(event.target.value as string);
  };

  return (
    <Select
      value={diagnosis}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Diagnosis 1</MenuItem>
      <MenuItem value={20}>Diagnosis 2</MenuItem>
      <MenuItem value={30}>Diagnosis 3</MenuItem>
    </Select>
  );
};

export default DiagnosisSelector;