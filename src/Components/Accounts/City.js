import React from "react";
import Select from 'react-select';

const options = [
  { value: 'Lahore', label: 'Lahore' },
  { value: 'Islamabad', label: 'Islamabad' },
  { value: 'Karachi', label: 'Karachi' },
  { value: 'Bhawalpur', label: 'Bhawalpur' },
  { value: 'Multan', label: 'Multan' },
  { value: 'Sahiwal', label: 'Sahiwal' },
  { value: 'Haiderabad', label: 'Haiderabad' },
  { value: 'Sakhar', label: 'Sakhar' },
  { value: 'Sadiqabad', label: 'Sadiqabad' }
];

function ReactSelect() {
  return (
    <div>
      <Select
        options={options}
      />
    </div>
  );
}

export default ReactSelect;