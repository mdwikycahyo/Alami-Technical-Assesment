// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="">
        <ul className="d-flex align-items-center justify-content-between pt-1 pb-1">
          <div className="left-navbar">
            <li>
              <a href="#demos">
                Demos <i class="bi bi-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#pages">
                Pages <i class="bi bi-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#portofolio">
                Portofolio <i class="bi bi-chevron-down" />
              </a>
            </li>
          </div>
          <div className="right-navbar d-flex align-items-center">
            <button className="btn btn-light m-2">
              <i className="bi bi-cart" />
            </button>
            <button className="btn btn-light">
              <i className="bi bi-search" />
            </button>
            <input type="text" className="w-100 m-2 p-1"/>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
