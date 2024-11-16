import React from "react";
import { useEffect } from "react";
import "./App.css";
import { DashboardLayoutBasic } from "screens/menu";
import { ProjectListScreen } from "screens/project-list";
import { LoginScreen } from "screens/login";
import { Box, colors } from "@mui/material";
import IndexRouter from './router/IndexRouter';
const pro = {
  color1 : {color: "red"}
}
function App() {

  return (
    <div className="App">
      <IndexRouter></IndexRouter>
      {/* <DashboardLayoutBasic/> */}
      {/* <LoginScreen /> */}
    </div>
  );
}

export default App;
