function IncidentData() {
  return (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Incident Data</h2>
          <div className="sectionDescription">
            <p>
              This site displays the data from Macalester's publicly available
              Crime and Fire Log from the years 2018-2022. We decided to not
              include 2017, 2023, and 2024 because they are formatted
              differently from the other years, and we chose to put our time
              into the analysis of the data rather than into determining how to
              combine the differently formatted files. Below, you will see a
              link to the source of the data and the data in each of the formats
              we created.
            </p>
          </div>
        </div>
        <div className="incidentDataContent">
          <div className="incidentDataSection">
            <h3 className="incidentDataMiniHeader">
              Original Public Safety Data Source
            </h3>
            <div className="incidentDataButtonGrid">
              <a
                className="incidentDataLink"
                href="https://www.macalester.edu/public-safety/cleryact/crime_fire_log/"
                target="_blank"
              >
                <span className="incidentDataLink__icon">⛢</span>
                Public Safety Crime and Fire Log
              </a>
            </div>
          </div>

          <div className="incidentDataSection">
            <h3 className="incidentDataMiniHeader">
              Incident Data Files (2018-2022)
            </h3>
            <div className="incidentDataButtonGrid">
              <a
                className="incidentDataLink"
                href="/csvs/MCCFL_2018_Annual.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                2018 Incident Data
              </a>
              <a
                className="incidentDataLink"
                href="/csvs/MCCFL_2019_Annual.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                2019 Incident Data
              </a>
              <a
                className="incidentDataLink"
                href="/csvs/MCCFL_2020_Annual.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                2020 Incident Data
              </a>
              <a
                className="incidentDataLink"
                href="/csvs/MCCFL_2021_Annual.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                2021 Incident Data
              </a>
              <a
                className="incidentDataLink"
                href="/csvs/MCCFL_2022_Annual.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                2022 Incident Data
              </a>
              <a
                className="incidentDataLink incidentDataLink--allIncidents"
                href="/csvs/all_incidents.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                Download All Incident Data (CSV)
              </a>
            </div>
          </div>

          <div className="incidentDataSection">
            <h3 className="incidentDataMiniHeader">
              Additional Data Analysis Files
            </h3>
            <div className="incidentDataButtonGrid">
              <a
                className="incidentDataLink"
                href="/csvs/all_unique_crime_types.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                All Unique Crime Types
              </a>
              <a
                className="incidentDataLink"
                href="/csvs/all_unique_dispositions.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                All Unique Dispositions
              </a>
              <a
                className="incidentDataLink"
                href="/csvs/all_unique_locations.csv"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                All Unique Locations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Code</h2>
          <div className="sectionDescription">
            <p>
              From the data provided above, we created many visualizations. The
              code you can download below was used to parse the pdfs, format the
              data as csvs, and create several of the visualizations.
            </p>
          </div>
        </div>
        <div className="incidentDataContent">
          <div className="incidentDataSection">
            <h3 className="incidentDataMiniHeader">Data Processing Scripts</h3>
            <div className="incidentDataButtonGrid">
              <a
                className="incidentDataLink"
                href="/src/assets/python/parsingpdfs.py"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                PDF to CSV Parser
              </a>
              <a
                className="incidentDataLink"
                href="/src/assets/python/visualizations.py"
                download
              >
                <span className="incidentDataLink__icon">↓</span>
                Visualization Generator
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IncidentData;
