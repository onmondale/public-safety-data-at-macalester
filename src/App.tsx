import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import DataVisualizations from "./components/dataVisualizations";
import IncidentData from "./components/IncidentData";
import Survey from "./components/Survey";

type Page = "home" | "dataVisualizations" | "incidentData" | "survey";
type Theme = "color" | "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("color");
  const [page, setPage] = useState<Page>("home");

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    const root = document.documentElement;

    switch (newTheme) {
      case "color":
        root.style.setProperty("--background-color", "var(--color-bg)");
        root.style.setProperty("--text-color", "var(--color-text)");
        root.style.setProperty("--accent-color", "var(--color-accent)");
        break;
      case "light":
        root.style.setProperty("--background-color", "var(--light-bg)");
        root.style.setProperty("--text-color", "var(--light-text)");
        root.style.setProperty("--accent-color", "var(--light-accent)");
        break;
      case "dark":
        root.style.setProperty("--background-color", "var(--dark-bg)");
        root.style.setProperty("--text-color", "var(--dark-text)");
        root.style.setProperty("--accent-color", "var(--dark-accent)");
        break;
    }
  };

  const renderComponent = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "dataVisualizations":
        return <DataVisualizations theme={theme} />;
      case "incidentData":
        return <IncidentData />;
      case "survey":
        return <Survey />;
    }
  };

  let date = new Date().toDateString();
  let time = new Date().toTimeString().slice(0,8);
  

  return (
    <>
      <div className="headerContainer">
        <div className="leftColumn">
          <h1 className="title">
            <span className="titleIcon">◊</span> PUBLIC SAFETY DATA AT
            MACALESTER COLLEGE
          </h1>
          <h2 className="subtitle">
            Making Public Safety Data Accessible and Visible
            <br /> A Platform for Discussion
          </h2>
        </div>
        <div className="rightColumn">
          <div className="themeButtons">
            <div className="themeLabel">Select Color Theme:</div>
            <div className="themeToggleRow">
              <div
                className="toggleContainer"
                onClick={() => updateTheme("color")}
                data-selected={theme === "color"}
              >
                <span className="toggleIndicator">
                  {theme === "color" ? "△" : ""}
                </span>
                <span className="toggleLabel">Color</span>
              </div>
              <div
                className="toggleContainer"
                onClick={() => updateTheme("light")}
                data-selected={theme === "light"}
              >
                <span className="toggleIndicator">
                  {theme === "light" ? "△" : ""}
                </span>
                <span className="toggleLabel">Light</span>
              </div>
              <div
                className="toggleContainer"
                onClick={() => updateTheme("dark")}
                data-selected={theme === "dark"}
              >
                <span className="toggleIndicator">
                  {theme === "dark" ? "△" : ""}
                </span>
                <span className="toggleLabel">Dark</span>
              </div>
            </div>
          </div>
          <p className="description">
            Last Updated: <br /> { date + ", " + time }
          </p>
        </div>
      </div>

      <nav className="navBar">
        <button
          onClick={() => setPage("home")}
          className={`navButton ${page === "home" ? "selected" : ""}`}
        >
          {page === "home" && <span className="navIndicator">→</span>}
          Home Page
        </button>
        <button
          onClick={() => setPage("dataVisualizations")}
          className={`navButton ${
            page === "dataVisualizations" ? "selected" : ""
          }`}
        >
          {page === "dataVisualizations" && (
            <span className="navIndicator">*</span>
          )}
          Data Visualizations
        </button>
        <button
          onClick={() => setPage("incidentData")}
          className={`navButton ${page === "incidentData" ? "selected" : ""}`}
        >
          {page === "incidentData" && <span className="navIndicator">*</span>}
          Incident Data/Code
        </button>
        <button
          onClick={() => setPage("survey")}
          className={`navButton ${page === "survey" ? "selected" : ""}`}
        >
          {page === "survey" && <span className="navIndicator">*</span>}
          Community Survey
        </button>
      </nav>

      <main>{renderComponent()}</main>
    </>
  );
}

export default App;
