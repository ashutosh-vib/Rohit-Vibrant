import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Dashboard from "./dashboard";

export default function Home() {
  return (
    <div style={{ height: "38rem" }}>
      <Dashboard />
    </div>
  );
}
