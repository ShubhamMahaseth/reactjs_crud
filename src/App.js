import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
