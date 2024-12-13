import { useState } from "react";

function DataVisualizations() {
  const [currentView, setCurrentView] = useState<
    "main" | "location" | "time" | "classification"
  >("main");

  const ReturnButton = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexShrink: 0,
      }}
    >
      <button
        onClick={() => setCurrentView("main")}
        className="dataVizReturnButton"
      >
        <span style={{ fontSize: "1.2rem" }}>
          ← <i>Return</i>
        </span>
      </button>
    </div>
  );

  const LocationView = () => (
    <div className="contentContainer">
      <div
        style={{
          padding: "2rem",
          borderBottom: "1px solid var(--text-color)",
        }}
      >
        <div className="dataVizHeaderContainer">
          <ReturnButton />
          <h2
            className="sectionHeader"
            style={{ margin: 0, marginLeft: "2rem", padding: 0, width: "auto" }}
          >
            Location Analysis
          </h2>
        </div>
        <div className="sectionDescription" style={{ width: "100%" }}>
          <p>
            This heatmap visualization shows the distribution and density of
            reported incidents across the Macalester College campus from 2018 to
            2023. The lighter areas indicate a higher concentration of reported
            incidents, while darker areas show fewer reports.{" "}
            <i>
              The map is interactive, so you can zoom in and out, and click on
              individual points to learn more about the incidents that were
              reported at that location.
            </i>
          </p>
        </div>
      </div>
      <div className="sectionContent">
        <arcgis-embedded-map
          style={{
            height: "600px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "20px",
            border: "1px solid var(--text-color)",
          }}
          item-id="bba6509baf6f4cc1a7c4e58ba11880aa"
          theme="dark"
          portal-url="https://macgis.maps.arcgis.com"
          share-enabled
        />
      </div>
    </div>
  );

  const TimeView = () => (
    <div className="contentContainer">
      <div
        style={{
          padding: "2rem",
          borderBottom: "1px solid var(--text-color)",
        }}
      >
        <div className="dataVizHeaderContainer">
          <ReturnButton />
          <h2
            className="sectionHeader"
            style={{ margin: 0, marginLeft: "2rem", padding: 0, width: "auto" }}
          >
            Temporal Analysis Visualizations
          </h2>
        </div>
        <div className="sectionDescription" style={{ width: "100%" }}>
          <p>
            This heatmap visualization shows the distribution and density of
            reported incidents across the Macalester College campus from 2018 to
            2023. The lighter areas indicate a higher concentration of reported
            incidents, while darker areas show fewer reports.{" "}
            <i>
              The map is interactive, so you can zoom in and out, and click on
              individual points to learn more about the incidents that were
              reported at that location.
            </i>
          </p>
        </div>
      </div>
      <div className="sectionContent"></div>
    </div>
  );

  const ClassificationView = () => (
    <div className="contentContainer">
      <div
        style={{
          padding: "2rem",
          borderBottom: "1px solid var(--text-color)",
        }}
      >
        <div className="dataVizHeaderContainer">
          <ReturnButton />
          <h2
            className="sectionHeader"
            style={{ margin: 0, marginLeft: "2rem", padding: 0, width: "auto" }}
          >
            Incident Classification Analysis
          </h2>
        </div>
        <div className="sectionDescription" style={{ width: "100%" }}>
          <p>
            This heatmap visualization shows the distribution and density of
            reported incidents across the Macalester College campus from 2018 to
            2023. The lighter areas indicate a higher concentration of reported
            incidents, while darker areas show fewer reports.{" "}
            <i>
              The map is interactive, so you can zoom in and out, and click on
              individual points to learn more about the incidents that were
              reported at that location.
            </i>
          </p>
        </div>
      </div>
      <div className="sectionContent"></div>
    </div>
  );

  const MainView = () => (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Data Visualizations</h2>
          <div className="sectionDescription">
            <p>
              Explore our comprehensive analysis of public safety data through
              three different lenses: spatial distribution, temporal patterns,
              and incident classifications. Each visualization provides unique
              insights into campus safety patterns.
            </p>
          </div>
        </div>
        <div
          className="sectionContent"
          style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
        >
          <button
            onClick={() => setCurrentView("location")}
            className="navButton"
          >
            Location Analysis
          </button>
          <button onClick={() => setCurrentView("time")} className="navButton">
            Time Analysis
          </button>
          <button
            onClick={() => setCurrentView("classification")}
            className="navButton"
          >
            Incident Classification
          </button>
        </div>
      </section>
    </div>
  );

  switch (currentView) {
    case "location":
      return <LocationView />;
    case "time":
      return <TimeView />;
    case "classification":
      return <ClassificationView />;
    default:
      return <MainView />;
  }
}

export default DataVisualizations;
