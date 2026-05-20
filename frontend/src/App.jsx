import { BrowserRouter as Router, Routes, Route } from "react-router";

import Login from "./pages/Login";
import Mensajes from "./pages/Mensajes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mensajes" element={<Mensajes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
