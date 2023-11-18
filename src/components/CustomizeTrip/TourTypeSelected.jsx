import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const budgetOptions = [
  { label: "Standard ", value: "Standard " },
  { label: "Di lusso", value: "Di lusso  " },
  { label: "Super lusso ", value: "Super lusso " },
];
function TourTypeSelected({ value, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id="TourTypeSelected"
      options={budgetOptions}
      sx={{}}
      renderInput={(params) => (
        <TextField {...params} label="Il Tipo del Tour" variant="standard" />
      )}
      value={value}
      onChange={(_, newValue) => onChange(newValue.value)}
    />
  );
}

export default TourTypeSelected;
