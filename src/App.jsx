import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import FirePrediction from "./FirePrediction";
import Results from "./Results";
import Tips from "./Tips";

function App() {
  const [prediction, setPrediction] = useState(null);
  const [formStatus, setFormStatus] = useState(false);

  return (
    <>
      <Navbar />
      <Presentation />
      <FirePrediction
        setPrediction={setPrediction}
        setFormStatus={setFormStatus}
      />
      <Results prediction={prediction} formStatus={formStatus} />
      <Tips />
    </>
  );
}

export default App;
