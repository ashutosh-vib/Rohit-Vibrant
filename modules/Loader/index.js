import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

import Loader from "../../public/images/Loader.png";

function index() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={Loader} alt="Loader-logo" />
    </Box>
  );
}

export default index;
