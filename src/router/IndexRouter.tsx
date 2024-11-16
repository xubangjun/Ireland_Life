import { Login } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NewsSandBox from "views/sandbox/NewsSandBox";
import { ProjectListScreen } from "screens/project-list";
const IndexRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Wrap all Route elements inside a Routes component */}
        {/* <Route path="/" element={<NewsSandBox />} /> */}
        <Route path="/" element ={<NewsSandBox/>}/>
        <Route path="/list" element={<ProjectListScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default IndexRouter;
