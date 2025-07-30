import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePg from "./Pages/HomePg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePg />} />
      </Routes>
    </Router>
  );
}

export default App;
