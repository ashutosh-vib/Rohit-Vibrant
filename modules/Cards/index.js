import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "../../ui/components/Card";

function index() {
  const cardArray = [
    {
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut nulla commodo, viverra tellus et, gravida est. Sed laoreet nisi vel nulla commodo, quis hendrerit odio aliquet.",
    },
    {
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut nulla commodo, viverra tellus et, gravida est. Sed laoreet nisi vel nulla commodo, quis hendrerit odio aliquet.",
    },
    {
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut nulla commodo, viverra tellus et, gravida est. Sed laoreet nisi vel nulla commodo, quis hendrerit odio aliquet.",
    },
    {
      title: "Card Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut nulla commodo, viverra tellus et, gravida est. Sed laoreet nisi vel nulla commodo, quis hendrerit odio aliquet.",
    },
  ];
  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "48px",
            color: "rgba(0, 0, 0, 0.55)",
          }}
        >
          RESPONSIVE CARDS
        </Grid>
        {cardArray.map((data, index) => (
          <>
            {" "}
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Card data={data} key={index} />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}

export default index;
