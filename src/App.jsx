import { createRoot } from "react-dom/client";
import Pet from "./pet";
import SearchParams from "./SearchParams";


const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name='Luna' anime='Dog' breed='Havanese'/>
      <Pet name='Pepper' anime='Bird' breed='Cockatiel'/>
      <Pet name='Donik' anime='Cat' breed='Mix'/> */}
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
