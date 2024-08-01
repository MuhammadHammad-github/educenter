import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import About from "./pages/About";
import Courses from "./pages/CoursesPage";
import Events from "./pages/Events";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<About />} exact path="/about" />
        <Route element={<Courses />} exact path="/courses" />
        <Route element={<Events />} exact path="/events" />
        <Route element={<Blog />} exact path="/blog" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
