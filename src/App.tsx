import React from "react";
import "./App.css";
import BarGraph from "./components/barGraph";
import CssDesign from "./components/cssDesign";
import { gradeData } from "./config/gradeData";

function App() {
  return (
    <div className="">
      {/* <BarGraph data={gradeData} /> */}
      <CssDesign />
    </div>
  );
}

export default App;
