import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import About from "./pages/About";
import Courses from "./pages/CoursesPage";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Teacher from "./pages/Teacher";
import TeacherSingle from "./pages/TeacherSingle";
import Notice from "./pages/Notice";
import NoticeDetails from "./pages/NoticeDetails";
import Research from "./pages/Research";

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
        <Route element={<Contact />} exact path="/contact" />
        <Route element={<Teacher />} exact path="/teacher" />
        <Route element={<TeacherSingle />} exact path="/teacherSingle" />
        <Route element={<Notice />} exact path="/notice" />
        <Route element={<NoticeDetails />} exact path="/noticeDetails" />
        <Route element={<Research />} exact path="/research" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
