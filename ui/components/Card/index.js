import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function OutlinedCard({ data }) {
  const card = (
    <React.Fragment>
      <CardContent sx={{ width: "auto" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "26px",
            lineHeight: "31px",
            color: "#AEAEAE",
          }}
          gutterBottom
        >
          {data.title}
        </Typography>
        <Divider />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#000000",
            marginTop: "1rem",
          }}
          component="div"
        >
          {data.content}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
