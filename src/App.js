

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Faq from "./components/sections/Faq";
import ScrollToTop from "./components/ScrollToTop";
import { ModalProvider } from 'styled-react-modal'
import FancyModalButton from "./components/FancyModalButton";
import styled from 'styled-components'




function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
      <ModalProvider>
        {/* <Suspense fallback={<Loading />}> */}
        <FancyModalButton />
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Team />
          <Faq />
          <Footer />
          {/* <ScrollToTop scrollPosition={y}/> */}
          <ScrollToTop />{" "}
        {/* </Suspense> */}
        </ModalProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
