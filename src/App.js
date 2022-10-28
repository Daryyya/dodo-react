import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UIkit from "./pages/UIkit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uikit" element={<UIkit />} />
    </Routes>
  );
}

export default App;
