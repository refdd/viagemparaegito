import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const budgetOptions = [
  { label: "Crociera sul Nilo ", value: "Crociera sul Nilo " },
  { label: "Cairo e Crociera sul Nilo", value: "Cairo e Crociera sul Nilo  " },
  {
    label: "Cairo, crociera sul Nilo e Mar Rosso ",
    value: "Cairo, crociera sul Nilo e Mar Rosso ",
  },
  {
    label: "Tour combinato  ",
    value: "Tour combinato  ",
  },
];
function DestinationSelected({ value, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id="DestinationSelected"
      options={budgetOptions}
      sx={{}}
      renderInput={(params) => (
        <TextField {...params} label="Tipo del Tour" variant="standard" />
      )}
      value={value}
      onChange={(_, newValue) => onChange(newValue.value)}
    />
  );
}

export default DestinationSelected;
