import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
