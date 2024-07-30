import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./_components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
      </Routes>
    </>
  );
}

export default App;
