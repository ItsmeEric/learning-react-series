import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click here to visit Google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Access Google
  </a>
);

const aReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click here to access Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
