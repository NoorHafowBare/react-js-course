import { createRoot } from "react-dom/client";

const App = () => {
  const developers = ["noor", "yussuf", "hanat", "aisha", "hassan"];
  return developers.map((developer, index) => <li key={index}>{developer}</li>);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
