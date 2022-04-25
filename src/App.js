import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const SideBar = () => {
    return (
      <div
        className="d-flex flex-column sidebarResponsive"
        style={{
          position: "fixed",
          right: "0%",
          top: "8%",
          backgroundColor: "whitesmoke",
          zIndex: 1
        }}
      >
        <button className="btn btn-light sidebarResponsive" type="button">
          <i className="bi bi-chat-left" />
        </button>
        <button className="btn btn-light sidebarResponsive" type="button">
          <i className="bi bi-bullseye" />
        </button>
        <button className="btn btn-light sidebarResponsive" type="button">
          <i className="bi bi-file-earmark-bar-graph" />
        </button>
        <button className="btn btn-light sidebarResponsive" type="button">
          <i className="bi bi-camera-video" />
        </button>
        <button className="btn btn-light sidebarResponsive" type="button">
          <i className="bi bi-people" />
        </button>
        <button className="btn btn-light sidebarResponsive" type="button">
          <i className="bi bi-cart" />
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      {/* Navbar */}
      <div className="Navbar">
        <ul className="pt-1 pb-1">
          <div className="top-navbar-left">
            <li>
              <a href="#demos">
                Demos <i className="bi bi-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#pages">
                Pages <i className="bi bi-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#portofolio">
                Portofolio <i className="bi bi-chevron-down" />
              </a>
            </li>
          </div>
          <div className="top-navbar-right d-flex justify-content-end">
            <div className="right-navbar">
              <button className="btn btn-light m-2">
                <i className="bi bi-cart" />
              </button>
              <button className="btn btn-light m-2">
                <i className="bi bi-search" />
              </button>
              <button
                className="hamburgerButton btn btn-light"
                onClick={() => setShowSideBar(!showSideBar)}
              >
                <i className="bi bi-list" />
              </button>
            </div>
            <input type="text" className="w-10 m-2 p-1" />
          </div>
        </ul>
      </div>
      {/* Responsive Sidebar */}
      {showSideBar && <SideBar />}
      {/* Sidebar */}
      <div
        className="d-flex flex-column sideButtons"
        style={{
          position: "fixed",
          right: "0%",
          top: "30%",
          backgroundColor: "whitesmoke",
          zIndex: 1
        }}
      >
        <button className="btn btn-light sideButtons" type="button">
          <i className="bi bi-chat-left" />
        </button>
        <button className="btn btn-light sideButtons" type="button">
          <i className="bi bi-bullseye" />
        </button>
        <button className="btn btn-light sideButtons" type="button">
          <i className="bi bi-file-earmark-bar-graph" />
        </button>
        <button className="btn btn-light sideButtons" type="button">
          <i className="bi bi-camera-video" />
        </button>
        <button className="btn btn-light sideButtons" type="button">
          <i className="bi bi-people" />
        </button>
        <button className="btn btn-light sideButtons" type="button">
          <i className="bi bi-cart" />
        </button>
      </div>
      {/* ==== Background Image ===== */}
      <div
        style={{
          height: "98vh",
          backgroundImage: `url("${require("./kitchenTable.jpeg")}")`,
          backgroundSize: "cover",
          paddingTop: "90px",
        }}
      >
        <h1 style={{ color: "white", fontFamily: "Ms Madi, cursive" }}>
          Catering should be an experience
        </h1>
        <h1
          style={{
            color: "white",
            fontFamily: "Nunito, sans-serif",
            fontWeight: "bold",
            fontSize: "50px",
            width: "50%",
            margin: "0.5em auto",
          }}
        >
          We use only the finest and freshest ingredients
        </h1>
        <p
          style={{
            color: "white",
            width: "35%",
            margin: "auto",
            fontWeight: 600,
          }}
        >
          At Sway catering we know that food is an important part of life. If
          the meal is not perfect, your event cannot be perfect.
        </p>
        <button
          type="button"
          className="btn rounded-pill mt-5"
          style={{ backgroundColor: "#41D55F", color: "white" }}
        >
          Request a Quote <i className="bi bi-chevron-right" />
        </button>
      </div>
      {/* Devider */}
      <div className="custom-shape-divider-bottom-1650870126 mb-2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* Mid Section */}
      <div style={{ marginTop: "10em" }}>
        <h1 style={{ color: "gray", fontFamily: "Ms Madi, cursive" }}>
          Catering services in New York
        </h1>
        <h1 style={{ color: "gray" }}>
          We specialize in corporate and private events
        </h1>
        <p style={{ color: "gray", width: "50%", margin: "auto" }}>
          With 20 years of experience, we promise you the finest, local
          ingredients, hand-crafted cooking sprinkled with our unique whimsical
          elegance and exceptional service.
        </p>
        <div
          style={{
            backgroundColor: "gray",
            height: "10px",
            marginTop: "10px",
            marginBottom: "1em",
          }}
        />
      </div>
      {/* Bottom Section */}
      <div className="row" style={{ color: "white", height: "65vh" }}>
        <div
          className="col-3 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#404040", fontSize: "1.5em" }}
        >
          My Portofolio
        </div>
        <div className="col-5 d-flex" style={{ backgroundColor: "#302729" }}>
          <div className="row">
            <div className="col-sm-6">
              <div className="card card-x" style={{ backgroundColor: "#36292e" }}>
                <div className="card-body">
                  <i className="bi bi-box" />
                  <h5 className="card-title">Design</h5>
                  <p className="card-text">
                    A full stack alaround designer that may or may not include a
                    guide for specific crative people
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card card-x" style={{ backgroundColor: "#36292e" }}>
                <div className="card-body">
                  <i className="bi bi-file-earmark-code" />
                  <h5 className="card-title">Develop</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card card-x" style={{ backgroundColor: "#36292e" }}>
                <div className="card-body">
                  <i className="bi bi-pen" />
                  <h5 className="card-title">Write</h5>
                  <p className="card-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card card-x" style={{ backgroundColor: "#36292e" }}>
                <div className="card-body">
                  <i className="bi bi-hand-thumbs-up" />
                  <h5 className="card-title">Promote</h5>
                  <p className="card-text">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-4 p-3"
          style={{ backgroundColor: "#302729", textAlign: "left" }}
        >
          <h3 style={{ color: "#F77B81" }}>Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button
            className="btn rounded-pill"
            style={{ color: "white", borderColor: "#F77B81" }}
          >
            Download CV <i className="bi bi-chevron-right" />
          </button>
          <button
            className="btn rounded-pill m-3"
            style={{ color: "white", borderColor: "#F77B81" }}
          >
            Check My Portofolio <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;