function IncidentData() {
  return (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Incident Data</h2>
          <div className="sectionDescription">
            <p>
              This site displays the data from Macalester’s publicly available
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
        <div className="sectionContent incidentDataContent">
          <div className="incidentDataMiniHeader">Link:</div>
          <a
            className="incidentDataLink"
            href="https://www.macalester.edu/public-safety/cleryact/crime_fire_log/"
            target="_blank"
          >
            Public Safety Crime and Fire Log on Macalester's website
          </a>
          <div className="incidentDataMiniHeader">Download:</div>
          <a
            className="incidentDataLink"
            href="/csvs/all_incidents.csv"
            download
          >
            All incident data
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/MCCFL_2018_Annual.csv"
            download
          >
            2018 incident data
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/MCCFL_2019_Annual.csv"
            download
          >
            2019 incident data
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/MCCFL_2020_Annual.csv"
            download
          >
            2020 incident data
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/MCCFL_2021_Annual.csv"
            download
          >
            2021 incident data
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/MCCFL_2022_Annual.csv"
            download
          >
            2022 incident data
          </a>
          <div className="incidentDataMiniHeader"></div>
          <a
            className="incidentDataLink"
            href="/csvs/all_unique_crime_types.csv"
            download
          >
            All unique crime types
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/all_unique_dispositions.csv"
            download
          >
            All unique dispositions
          </a>
          <a
            className="incidentDataLink"
            href="/csvs/all_unique_locations.csv"
            download
          >
            All unique locations
          </a>
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
        <div className="sectionContent incidentDataContent">
          <div className="incidentDataMiniHeader">
            This Python script takes pdfs downloaded from the Macalester site
            and creates a csv of incidents for each year, all incidents
            together, all unique crime types, all unique dispositions, and all
            unique locations.
          </div>
          <a
            className="incidentDataLink"
            href="/src/assets/python/parsingpdfs.py"
            download
          >
            Code to parse pdfs
          </a>
          <div className="incidentDataMiniHeader">
            This Python script uses the csv created in the script above of all
            incidents and creates a visualization of incidents by the minute,
            hour, month, and year.
          </div>
          <a
            className="incidentDataLink"
            href="/src/assets/python/visualizations.py"
            download
          >
            Code to create visualizations
          </a>
        </div>
      </section>
    </div>
  );
}

export default IncidentData;
