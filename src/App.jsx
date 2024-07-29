import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} exact path="/home" />
      </Routes>
    </>
  );
}

export default App;
