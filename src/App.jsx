import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./details";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";


const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: Infinity,
    cacheTime: Infinity,
  }
})

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
     <AdoptedPetContext.Provider value={adoptedPet}>
    <QueryClientProvider client={queryClient}>
     
     <header>
          <Link to="/">Adopt Me!</Link>
        </header>
      <Routes>
    <Route path="/details/:id" element={<Details />} />
    <Route path="/" element={<SearchParams />} />
  </Routes>
  
  </QueryClientProvider>
  </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
