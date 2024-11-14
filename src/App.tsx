import React from "react";
import { useEffect } from "react";
import "./App.css";
import { DashboardLayoutBasic } from "screens/menu";
import { ProjectListScreen } from "screens/project-list";
import { LoginScreen } from "screens/login";
import { Box, colors } from "@mui/material";

const pro = {
  color1 : {color: "red"}
}
function App() {
  useEffect(() => {
    // 在组件挂载后执行的操作
    console.log("页面加载时执行的操作");

    // 如果需要清理操作，可以在 return 中返回一个函数
    return () => {
      // 在组件卸载时执行的清理操作
      console.log("组件卸载时执行的清理操作");
    };
  }, []);

  return (
    <Box className="App">
      <Box sx={pro.color1}>test</Box>
      {/* <DashboardLayoutBasic/> */}
      <ProjectListScreen/>
      {/* <LoginScreen /> */}
    </Box>
  );
}

export default App;
