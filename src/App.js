import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div className="top">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo} alt="ironhack logo" />
            <img className="menu" src={menu} alt="menu" />
          </div>
        </nav>
        <h1>Say hello to<br></br>ReactJS</h1>
        <p>
          You will learn how to use<br></br>
          the most popular frontend library<br></br>
          and become a super Ninja developer.
        </p>
        <button type="button" className="btn btn-light btn-lg">Awesome!</button>
      </div>
    </header>
    <section>
      <div className="container">
        <div className="containerdivitions">
          <div className="col">
            <img className="section-img" src={icon1} alt="icon1" />
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive UIs.
            </p>
          </div>
          <div className="col">
            <img className="section-img" src={icon2} alt="icon2" />
            <h3>Components</h3>
            <p>
              Build encapsulated components that manage their state.
            </p>
          </div>
          <div className="col">
            <img className="section-img" src={icon3} alt="icon3" />
            <h3>Single-Way</h3>
            <p>
              A set of immutable values are passed to the components.
            </p>
          </div>
          <div className="col">
            <img className="section-img" src={icon4} alt="icon4" />
            <h3>JSX</h3>
            <p>
              Statically-typed, designed to run on modern browsers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}


export default App;
