import React, { useState } from "react";
import "./App.css";

function Controlled() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("dark");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function uppercase() {
    setText(text.toUpperCase());
  }

  function lowercase() {
    setText(text.toLowerCase());
  }

  function removeExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  function clearText() {
    setText("");
  }

  function copyText() {
    navigator.clipboard.writeText(text);
  }

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className={`navbar navbar-expand ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onChange={toggleMode}
                  checked={mode === "light"}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                  {mode === "light" ? "Dark Mode" : "Light Mode"}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div className={`main ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <div className={`controlled-container ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
          <h1 className="controlled-heading">Controlled Component</h1>
          <textarea className={`controlled-textarea ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`} value={text} onChange={handleChange} />
          <h1 className="controlled-length">Length: {text.length}</h1>
          <button className="controlled-button" onClick={uppercase}>
            Uppercase
          </button>
          <button className="controlled-button" onClick={lowercase}>
            Lowercase
          </button>
          <button className="controlled-button" onClick={clearText}>
            Clear
          </button>
          <button className="controlled-button" onClick={copyText}>
            Copy
          </button>
          <button className="controlled-button" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <h1 className="controlled-length">Length after modifications: {text.length}</h1>
        </div>
      </div>
    </>
  );
}

export default Controlled;
