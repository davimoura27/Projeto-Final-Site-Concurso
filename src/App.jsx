import { ThemeProvider } from "./contexts/ThemeContext";

import "./App.css";
import { Home } from "./Components/Home/home";
import { Header } from "./Components/Header/header";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
