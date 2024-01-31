import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Movie from "./components/Movie";
import { useEffect, useState } from "react";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:showId" element={<Movie  />} />
      </Routes>
    </Router>
  )
}

export default App
