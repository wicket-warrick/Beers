import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./views/Home/Home";
import { Contact } from "./views/Contact/Contact";
import { CatalogueBeer } from "./views/Catalogue/Catalogue";
import { BeerDetail } from "./views/Detail/BeerDeatil";
import BeerFormDataProvider from "./context/BeerFormDataProvider";


function App() {
  return (
    <BeerFormDataProvider>
    <div className="App">
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<CatalogueBeer />} />
          <Route path='/beers/:id' element={<BeerDetail/>}/>
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
    </BeerFormDataProvider>
  );
}

export default App;
