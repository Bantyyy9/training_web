import { useState } from "react";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";

function App() {
  const [rating, setRating] = useState("");
  const [mode, setMode] = useState("front");
  // if (mode === "front") {
  //   return <FrontCard />;
  // } else {
  //   return <BackCard />;
  // }

  return mode === "front" ? (
    <FrontCard rating={rating} setRating={setRating} setMode={setMode} />
  ) : (
    <BackCard rating={rating} setMode={setMode} />
  );
}

export default App;
