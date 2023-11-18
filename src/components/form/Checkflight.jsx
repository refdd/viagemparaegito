import Checkbox from "@mui/material/Checkbox";
import React from "react";

function CustomCheckbox({ checked, handleChange, required }) {
  return (
    <div className=" flex items-center ">
      <Checkbox
        required={required}
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{ paddingLeft: 0 }}
      />
      <p className=" flex gap-1 text-sm  font-medium text-gray-800 capitalize">
        Aggiungi Volo Internazionale
      </p>
    </div>
  );
}

export default CustomCheckbox;
