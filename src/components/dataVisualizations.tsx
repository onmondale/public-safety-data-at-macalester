import { useState } from "react";
import TableauViz from "./TableauViz";

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
            To use location data, we found the longitudes and latitudes on
            Google Maps of each cited location from the incident report. We
            found, however, that there was a range of location formatting. While
            some locations were specific buildings or fields, others were entire
            streets or said something as broad as "off campus." For locations
            that were street names, we chose a location on the map, and for
            locations that were as broad as "off campus," we did not include
            them. We had a goal to include as many of the incidents as possible,
            and for this reason, we sacrificed some precision.
          </p>
        </div>
      </div>
      <div className="sectionContent">
        <p style={{ marginBottom: "2rem" }}>
          This heatmap visualization below shows the distribution and density of
          reported incidents across the Macalester College campus from 2018 to
          2023. The lighter areas indicate a higher concentration of reported
          incidents, while darker areas show fewer reports.{" "}
          <i>
            The map is interactive, so you can zoom in and out, and click on
            individual points to learn more about the incidents that were
            reported at that location.
          </i>
        </p>
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

  const ClassificationView = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(
      "Bias and Harassment"
    );

    const categories = [
      "Bias and Harassment",
      "Safety and Emergency Response",
      "Criminal Activity",
      "Policy Violations",
      "Other",
    ];

    const getSubVisualizationProps = (category: string) => {
      type VizCategory = (typeof categories)[number];
      const vizProps: Record<
        VizCategory,
        { id: string; name: string; title: string }
      > = {
        "Bias and Harassment": {
          id: "viz1734194728767",
          name: "PublicSafetyReportedIncidentTypeBiasandHarassment/BiasandHarassment",
          title: "Bias and Harassment Incidents Breakdown",
        },
        "Safety and Emergency Response": {
          id: "viz1734196972871",
          name: "PublicSafetyData_17340730897330/SafetyandEmergencyResponse",
          title: "Safety and Emergency Response Incidents Breakdown",
        },
        "Criminal Activity": {
          id: "viz173419641089",
          name: "PublicSafetyReportedIncidentTypeCriminalActivity/CriminalActivity",
          title: "Criminal Activity Incidents Breakdown",
        },
        "Policy Violations": {
          id: "viz1734197607645",
          name: "PublicSafetyReportedCrimeTypePolicyViolations/PolicyViolations",
          title: "Policy Violations Incidents Breakdown",
        },
        Other: {
          id: "viz1734197274411",
          name: "PublicSafetyReportedCrimeTypeOther/Other",
          title: "Other Incidents Breakdown",
        },
      };

      return {
        ...vizProps[category as VizCategory],
        url: "https%3A%2F%2Fpublic.tableau.com%2F",
        staticImageUrl: `https://public.tableau.com/static/images/Pu/PublicSafetyReportedIncidentType${category.replace(
          /\s+/g,
          ""
        )}/Sheet1/1.png`,
      };
    };

    return (
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
              style={{
                margin: 0,
                marginLeft: "2rem",
                padding: 0,
                width: "auto",
              }}
            >
              Incident Classification Analysis
            </h2>
          </div>
          <div className="sectionDescription" style={{ width: "100%" }}>
            <p>
              The visualizations below serve as visual representations of how
              Public Safety classifies their incidents. We used the two fields
              "Disposition", and "Incident Type" to make these visualizations.
            </p>
          </div>
        </div>
        <div className="sectionContent">
          <h3
            style={{
              marginBottom: "2rem",
              marginTop: 0,
              padding: 0,
              fontSize: "2rem",
              fontFamily: "var(--font-heading)",
              fontWeight: "bold",
            }}
          >
            → All Reported Incident Types, Categorized (2018 to 2022)
          </h3>
          <p style={{ marginBottom: "2rem" }}>
            These visualizations show the distribution of all reported incidents
            by Public Safety, categorized into broader classifications for
            better understanding of the data.{" "}
            <strong>
              The chart is interactive - you can hover over sections to see
              detailed information, click on categories to drill down, and use
              the toolbar for additional features.
            </strong>
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <TableauViz
              id="viz1734194728766"
              url="https%3A%2F%2Fpublic.tableau.com%2F"
              name="PublicSafetyReportedIncidentTypeAllReportedIncidentTypes/AllReportedCrimeTypes"
              staticImageUrl="https://public.tableau.com/static/images/Pu/PublicSafetyReportedIncidentTypeAllReportedIncidentTypes/AllReportedCrimeTypes/1.png"
              title="All Reported Incident Types, Categorized (1,815 Total Incidents)"
            />

            <h4 style={{ marginTop: "2rem" }}> How we Categorized the Data</h4>
            <p style={{ marginBottom: "2rem" }}>
              The raw data includes over one hundred unique "Incident Types." We
              determined that displaying this raw data in a pie chart would not
              be particularly informative, and this was our incentive to attempt
              to categorize the data. We first tried to create subcategories
              ourselves, but struggled greatly, and ultimately put the data into
              ChatGPT to create the category headers, and decided from there
              which types fit into which category. <br />
              <br />
              There were many instances where things did not fit nicely into
              categories. For example, sexual harassment is both criminal
              activity as well as a form of harassment. We considered allowing
              incidents such as this one to fall into multiple categories, but
              doing so would cause overrepresentation of incidents that fall
              into multiple categories. For this reason, we decided the best
              course of action was to make well-intentioned, but inherently
              biased decisions. The decisions we made are easily accessible by
              looking at the pie chart that shows all types that fall into one
              category, and we believe transparency helps address this issue.
            </p>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "var(--text-color)",
                    fontWeight: "bold",
                  }}
                >
                  View Pie Charts of Sub Categories:
                </span>
                <div className="dataVizSelectContainer">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="dataVizSelect"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <span className="dataVizSelectArrow">▼</span>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TableauViz
                  key={selectedCategory}
                  {...getSubVisualizationProps(selectedCategory)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sectionContent">
          <h3
            style={{
              marginBottom: "2rem",
              marginTop: 0,
              padding: 0,
              fontSize: "2rem",
              fontFamily: "var(--font-heading)",
              fontWeight: "bold",
            }}
          >
            → All Reported Dispositions, (2018 to 2022)
          </h3>
          <p style={{ marginBottom: "2rem" }}>
            These visualizations show the distribution of all reported
            dispositions by Public Safety, organized in an interactive chart.{" "}
            <strong>
              The chart is interactive - you can hover over sections to see
              detailed information, and click on categories to learn more about
              a specific disposition. Please use the filter slider to the right
              of the main content to filter dispositions based off of Reported
              Incident Count. You can find some definitions of these dispositions 
              at the bottom of <a href="https://www.macalester.edu/public-safety/cleryact/crime_fire_log/"
                target="_blank" rel="noopener noreferrer">this</a> page.
            </strong>
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <TableauViz
              id="viz1734199628945"
              url="https%3A%2F%2Fpublic.tableau.com%2F"
              name="PublicSafetyReportedIncidentDispositions/DispositionVisualization"
              staticImageUrl="https://public.tableau.com/static/images/Pu/PublicSafetyReportedIncidentDispositions/DispositionVisualization/1.png"
              title="Public Safety Reported Incident Dispositions"
            />
          </div>
        </div>
      </div>
    );
  };

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
