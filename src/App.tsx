import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Paper, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          border: "1px solid green",
        }}
      >
        <div style={{ backgroundColor: "red", border: "1px solid black" }}>
          Menüleiste
        </div>
        <div style={{ display: "flex" }}>
          <Paper sx={{ border: "5px solid yellow" }}>
            <Typography>Heading</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Item />
              <Item />
              <Item />
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
}

const Item = () => {
  return <div style={{ backgroundColor: "orange", padding: 5 }}>Item</div>;
};

export default App;
