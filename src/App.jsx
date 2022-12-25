import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./details";

const App = () => {
  return (
    <BrowserRouter>
     <header>
          <Link to="/">Adopt Me!</Link>
        </header>
      <Routes>
    <Route path="/details/:id" element={<Details />} />
    <Route path="/" element={<SearchParams />} />
  </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
