import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function ArrivalDate({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            variant: "standard",
            required: true,
            fullWidth: true,
            label: "Arrivo",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default ArrivalDate;
