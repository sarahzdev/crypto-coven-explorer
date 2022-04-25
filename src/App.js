import { BrowserRouter, Routes, Route } from "react-router-dom";
import AspectExplorer from "./pages/AspectExplorer";
import AstrologicalChartExplorer from "./pages/AstrologicalChartExplorer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/by-sign" element={<AstrologicalChartExplorer />}></Route>
        <Route path="/by-appearance" element={<AspectExplorer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
