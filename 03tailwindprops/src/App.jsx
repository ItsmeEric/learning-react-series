import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-sky-700 p-3 rounded-md">
        Vite with TailwindCSS
      </h1>
      <Card username="Eric Mbarushimana" role="Fraud Analyst, Mourway" />
      <Card />
    </>
  );
}

export default App;
