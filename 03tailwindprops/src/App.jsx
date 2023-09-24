import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-sky-700 p-3 rounded-md">
        Vite with TailwindCSS
      </h1>
      <Card />
    </>
  );
}

export default App;
