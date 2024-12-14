import { useState } from "react";

function DataVisualizations({ theme }: { theme: "color" | "light" | "dark" }) {
  const [currentView, setCurrentView] = useState<
    "main" | "location" | "time" | "classification"
  >("main");

  const getThemeImageEnding = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      default:
        return "Color";
    }
  };

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
          <p>
            To create the heat map, we found the longitudes and latitudes on
            Google Maps of each cited location from the incident report. We
            found, however, that there was a range of location formatting. While
            some locations were specific buildings or fields, others were entire
            streets or said something as broad as “off campus.” For locations
            that were street names, we chose a location on the map, and for
            locations that were as broad as “off campus,” we did not include
            them. We had a goal to include as many of the incidents as possible,
            and for this reason, we sacrificed some precision.
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
            By separating the minute, hour, month, and year of each incident, we
            created these visualizations that show different perspectives on the
            timing of incident reporting.{" "}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <img
              id="minuteGraph"
              className="timeVisualizationImg"
              src={`/graphs/crimePerMinute${getThemeImageEnding()}.png`}
              alt="Crime reports by minute visualization"
            />
            <img
              id="hourGraph"
              className="timeVisualizationImg"
              src={`/graphs/crimePerHour${getThemeImageEnding()}.png`}
              alt="Crime reports by hour visualization"
            />
            <img
              id="monthGraph"
              className="timeVisualizationImg"
              src={`/graphs/crimePerMonth${getThemeImageEnding()}.png`}
              alt="Crime reports by month visualization"
            />
            <img
              id="yearGraph"
              className="timeVisualizationImg"
              src={`/graphs/crimePerYear${getThemeImageEnding()}.png`}
              alt="Crime reports by year visualization"
            />
          </div>
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
            This visualization shows [PROVIDE MORE DESCRIPTION HERE].{" "}
            <i>
              The chart is interactive, so [PROVIDE MORE INSTRUCTIONS HERE!!!!]
            </i>
          </p>
          <p>
            The raw data includes over one hundred unique “Incident Types.” We
            determined that displaying this raw data in a pie chart would not be
            particularly informative, and this was our incentive to attempt to
            categorize the data. We first tried to create subcategories
            ourselves, but struggled greatly, and ultimately put the data into
            ChatGPT to create the category headers, and decided from there which
            types fit into which category.
          </p>
          <p>
            There were many instances where things did not fit nicely into
            categories. For example, sexual harassment is both criminal activity
            as well as a form of harassment. We considered allowing incidents
            such as this one to fall into multiple categories, but doing so
            would cause overrepresentation of incidents that fall into multiple
            categories. For this reason, we decided the best course of action
            was to make well-intentioned, but inherently biased decisions. The
            decisions we made are easily accessible by looking at the pie chart
            that shows all types that fall into one category, and we believe
            transparency helps address this issue.
          </p>
        </div>
      </div>
      <div className="sectionContent"></div>
    </div>
  );

  const MainView = () => (
    <div className="dataViz-container">
      <h2 className="dataViz-header">Data Visualizations</h2>
      <div className="dataViz-description">
        <p>
          Explore our comprehensive analysis of public safety data through three
          different lenses of visualizations: spatial distribution, temporal
          patterns, and incident classifications.
        </p>
      </div>
      <div className="dataViz-buttons-container">
        <button
          onClick={() => setCurrentView("location")}
          className="dataViz-button"
        >
          Location Analysis
        </button>
        <button
          onClick={() => setCurrentView("time")}
          className="dataViz-button"
        >
          Time Analysis
        </button>
        <button
          onClick={() => setCurrentView("classification")}
          className="dataViz-button"
        >
          Incident Classification
        </button>
      </div>
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
