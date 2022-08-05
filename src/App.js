import "./App.css";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./views/Home/Home";
import { Contact } from "./views/Contact/Contact";
import { CatalogueBeer } from "./views/Catalogue/Catalogue";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<CatalogueBeer />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
