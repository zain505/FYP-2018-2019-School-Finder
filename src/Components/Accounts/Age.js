import React from "react";
import Select from 'react-select';

const options = [
  { value: '15', label: '15 yo' },
  { value: '16', label: '16 yo' },
  { value: '17', label: '17 yo' },
  { value: '18', label: '18 yo' },
  { value: '19', label: '19 yo' },
  { value: '20', label: '20 yo' },
  { value: '21', label: '21 yo' },
  { value: '22', label: '22 yo' },
  { value: '23', label: '23 yo' },
  { value: '24', label: '24 yo' },
  { value: '25', label: '25+' },
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