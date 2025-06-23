import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Prediction from "./Prediction";
import Tips from "./Tips";

function App() {
  const [prediction, setPrediction] = useState(null);

  return (
    <>
      <h1>🔥 Fire Prediction 🔥</h1>
      <Form setPrediction={setPrediction} />
      <h1>Results:</h1>
      <Prediction prediction={prediction} />
      <hr></hr>
      <Tips />
    </>
  );
}

export default App;
