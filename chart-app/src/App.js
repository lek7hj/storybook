import React from "react";
import "./App.css";
import { data, data2, data3 } from "./data"
import { Line, Bar, Bubble } from "react-chartjs-2";

export default function App() {
  return (
    <div className="App">
      <Line data={data} />
      <Bar data={data2} />
      <Bubble data={data3} />
    </div>
  );
}