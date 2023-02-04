import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

import InputField from "../../ui/components/InputField";

const Index = () => {
  const [enteredName, setEnteredName] = useState("");
  return (
    <Box sx={{ padding: "1rem" }}>
      <InputField
        label="NAME"
        onChange={(e) => setEnteredName(e.target.value)}
        value={enteredName}
        placeholder="Enter Your Name"
      />

      <Box
        sx={{
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "44px",
          lineHeight: "53px",
          color: "#383838",
          marginTop: "3rem",
        }}
      >
        {`Your Name Is: ${enteredName}`}
      </Box>
    </Box>
  );
};

export default Index;
