import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import DataVisualizations from "./components/dataVisualizations";
import IncidentData from "./components/IncidentData";
import Discussion from "./components/Discussion";

type Page = "home" | "dataVisualizations" | "incidentData" | "discussion";
type Theme = "color" | "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("color");
  const [page, setPage] = useState<Page>("home");
  const [useStandardFonts, setUseStandardFonts] = useState(false);

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
          <h1 className="title">
            <span className="titleIcon">🌀</span> PUBLIC SAFETY DATA AT
            MACALESTER COLLEGE
          </h1>
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
                onClick={() => updateTheme("color")}
                data-selected={theme === "color"}
              >
                <span className="toggleIndicator">
                  {theme === "color" ? "🐦" : ""}
                </span>
                <span className="toggleLabel">Color Theme</span>
              </div>
              <div
                className="toggleContainer"
                onClick={() => updateTheme("light")}
                data-selected={theme === "light"}
              >
                <span className="toggleIndicator">
                  {theme === "light" ? "🐦" : ""}
                </span>
                <span className="toggleLabel">Light Theme</span>
              </div>
              <div
                className="toggleContainer"
                onClick={() => updateTheme("dark")}
                data-selected={theme === "dark"}
              >
                <span className="toggleIndicator">
                  {theme === "dark" ? "🐦" : ""}
                </span>
                <span className="toggleLabel">Dark Theme</span>
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
              <span className="toggleLabel">Toggle More Legible Fonts</span>
            </div>
          </div>
          <p className="description">
            Last Updated: <br /> December 13th, 2024 at 11:15:00 AM
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
