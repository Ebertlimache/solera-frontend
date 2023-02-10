import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
}

export default App;
