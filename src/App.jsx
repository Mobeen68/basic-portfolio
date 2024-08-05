import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [focusComponent, setFocusComponent] = useState("");
  return (
    <>
      <Header setFocusComponent={setFocusComponent} />
      <About
        focusComponent={focusComponent}
        setFocusComponent={setFocusComponent}
      />
      <Portfolio
        focusComponent={focusComponent}
        setFocusComponent={setFocusComponent}
      />
      <Contact
        focusComponent={focusComponent}
        setFocusComponent={setFocusComponent}
      />
    </>
  );
}

export default App;
