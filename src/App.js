// containers
import Contact from "./containers/Contact";
import Download from "./containers/Download";
import FAQ from "./containers/FAQ";
import Features from "./containers/Features";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Main from "./containers/Main";

// styles
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
