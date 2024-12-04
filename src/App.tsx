import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import DataVisualizations from "./components/dataVisualizations";
import IncidentData from "./components/IncidentData";
import Discussion from "./components/Discussion";

type Page = "home" | "dataVisualizations" | "incidentData" | "discussion";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [page, setPage] = useState<Page>("home");
  const [useStandardFonts, setUseStandardFonts] = useState(false);

  const setTheme = (isDark: boolean) => {
    setIsDarkTheme(isDark);
    document.documentElement.style.setProperty(
      "--background-color",
      isDark ? "var(--dark-bg)" : "var(--light-bg)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      isDark ? "var(--dark-text)" : "var(--light-text)"
    );
  };

  const toggleFonts = () => {
    setUseStandardFonts(!useStandardFonts);
    document.documentElement.style.setProperty(
      "--font-heading",
      !useStandardFonts ? "var(--standard-heading)" : "Phosphene, serif"
    );
    document.documentElement.style.setProperty(
      "--font-body",
      !useStandardFonts ? "var(--standard-body)" : "Garamondt, serif"
    );
  };

  const renderComponent = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "dataVisualizations":
        return <DataVisualizations />;
      case "incidentData":
        return <IncidentData />;
      case "discussion":
        return <Discussion />;
    }
  };

  return (
    <>
      <div className="headerContainer">
        <div className="leftColumn">
          <h1 className="title">🌀 PUBLIC SAFETY DATA AT MACALESTER COLLEGE</h1>
          <h2 className="subtitle">
            Making Public Safety Data Accessible and Visible
            <br /> A Platform for Discussion
          </h2>
        </div>
        <div className="rightColumn">
          <div className="themeButtons">
            <div className="themeToggleRow">
              <div
                className="toggleContainer"
                onClick={() => setTheme(true)}
                data-selected={isDarkTheme}
              >
                <span className="toggleIndicator">
                  {isDarkTheme ? "🐦" : ""}
                </span>
                <span className="toggleLabel">Dark Mode</span>
              </div>
              <div
                className="toggleContainer"
                onClick={() => setTheme(false)}
                data-selected={!isDarkTheme}
              >
                <span className="toggleIndicator">
                  {!isDarkTheme ? "🐦" : ""}
                </span>
                <span className="toggleLabel">Light Mode</span>
              </div>
            </div>
            <div
              className="toggleContainer"
              onClick={toggleFonts}
              data-selected={useStandardFonts}
            >
              <span className="toggleIndicator">
                {useStandardFonts ? "🐦" : ""}
              </span>
              <span className="toggleLabel">Enable More Legible Fonts</span>
            </div>
          </div>
          <p className="description">
            Last Updated: <br /> December 13th, 2024 at 11:13:20 AM
          </p>
        </div>
      </div>

      <nav className="navBar">
        <button
          onClick={() => setPage("home")}
          className={`navButton ${page === "home" ? "selected" : ""}`}
        >
          {page === "home" && <span className="navIndicator">*</span>}
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
          Incident Data
        </button>
        <button
          onClick={() => setPage("discussion")}
          className={`navButton ${page === "discussion" ? "selected" : ""}`}
        >
          {page === "discussion" && <span className="navIndicator">*</span>}
          Discussion/Individual Reporting
        </button>
      </nav>

      <main>{renderComponent()}</main>
    </>
  );
}

export default App;
