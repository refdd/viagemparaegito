import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const budgetOptions = [
  { label: "Budget Persona", value: "Budget Persona" },
  { label: "From $1000 to $2000", value: "From $1000 to $2000  " },
  { label: "From $2000 to $3000", value: "From $2000 to $3000  " },
  { label: "From $3000 to $4000", value: "From $3000 to $4000" },
  { label: "From $4000 to $5000", value: "From $4000 to $5000" },
  { label: "Above $5000", value: "Above $5000" },
];
function BudgetSlected({ value, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id="BudgetSlected"
      options={budgetOptions}
      sx={{}}
      renderInput={(params) => (
        <TextField {...params} label="Budget" variant="standard" />
      )}
      value={value}
      onChange={(_, newValue) => onChange(newValue.value)}
    />
  );
}

export default BudgetSlected;
