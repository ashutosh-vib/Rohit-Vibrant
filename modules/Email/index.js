import React, { useState } from "react";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import InputField from "../../ui/components/InputField";

const Index = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [validEmail, setValidEmail] = useState(null);

  return (
    <Box sx={{ padding: "1rem" }}>
      <InputField
        label="EMAIL"
        onChange={(e) => {
          setEnteredEmail(e.target.value);
          if (e.target.value === "") {
            setValidEmail(null);
          } else {
            setValidEmail(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                e.target.value
              )
            );
          }
        }}
        value={enteredEmail}
        placeholder="Enter Your Email"
      />

      {enteredEmail !== "" && (
        <Box
          sx={{
            height: "197px",
            background: `${
              validEmail === true
                ? " rgba(72, 168, 82, 0.11)"
                : "rgba(228, 71, 71, 0.11)"
            }`,
            border: `${
              validEmail === true ? "1px solid #4EB558" : "1px solid #FF0000"
            }`,
            borderRadius: "26px",
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            {validEmail === true ? (
              <CheckCircleIcon sx={{ fontSize: 80, color: "#489C51" }} />
            ) : (
              <CancelIcon sx={{ fontSize: 80, color: "#E44747" }} />
            )}
          </Box>
          <Box
            sx={{
              fontWeight: 400,
              fontSize: "44px",
              color: `${validEmail === true ? "#489C51" : "#E44747"}`,
              marginLeft: "2rem",
            }}
          >
            {validEmail === true
              ? "Your email is valid"
              : "Your email is invalid"}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Index;
