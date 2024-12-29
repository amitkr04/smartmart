//components
import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div>
        <header>
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>
        <Outlet context={{ searchQuery }} />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
