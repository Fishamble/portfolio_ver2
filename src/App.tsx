import "./App.css";
import PortfolioStore from "./Context/PortfolioContext";

import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import HeroScreen from "./Components/Hero/HeroScreen";
import DevIcons from "./Components/Icons/DevIcons";
import Projects from "./Components/Projects/MainProject/Projects";

// const ContactForm = lazy(() => import("./Components/ContactForm/ContactForm"));

function App() {
  return (
    <>
      <PortfolioStore>
        {/* <Test /> */}
        <HeroScreen />
        <Projects />
        <DevIcons />
        <ContactForm />
        <Footer />
      </PortfolioStore>
    </>
  );
}

export default App;

//  need a main
