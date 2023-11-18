import TextField from "@mui/material/TextField";
import React from "react";

function ChildAgesFiled({ childAges, handleChildAgeChange }) {
  return (
    <div
      className={` mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 ${
        childAges.length == 0 ? "hidden" : "block"
      } `}
    >
      {childAges.map((age, index) => (
        <TextField
          key={index}
          fullWidth
          label={`età del bambino ${index + 1}`}
          type="number"
          variant="outlined"
          value={age}
          onChange={(e) => handleChildAgeChange(index, e.target.value)}
          inputProps={{ style: { textAlign: "center" } }}
        />
      ))}
    </div>
  );
}

export default ChildAgesFiled;
