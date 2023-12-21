import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-full h-screen flex flex-wrap 
    justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/259251/pexels-photo-259251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <h1>Currency Converter</h1>
    </div>
  );
}

export default App;
