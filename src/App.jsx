import React from "react";

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
