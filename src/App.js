// components
import Download from "./containers/Download";
import Features from "./containers/Features";
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
    </div>
  );
}

export default App;
