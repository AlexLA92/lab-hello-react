import logoIh from "./images/6.png";
import menuSandwich from "./images/1.png";
import ItemSection from "./components/ItemsSection";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav-bar">
          <div>
            <img src={logoIh} alt="1"></img>
          </div>
          <div>
            <img src={menuSandwich} alt="6"></img>
          </div>
        </nav>
        <section className="header-section">
          <h1>Say hello to reactJS</h1>
          <p>You will learn how to use the most popular front end library</p>
          <div className="header-button">Awesome !</div>
        </section>
      </header>
      <ItemSection />
      <div className="App"></div>
    </>
  );
}
export default App;
