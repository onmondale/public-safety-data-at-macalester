function DataVisualizations() {
  return (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Location Heatmap Visualization</h2>
          <div className="sectionDescription">
            <p>
              This heatmap visualization shows the distribution and density of
              reported incidents across the Macalester College campus. The
              darker areas indicate a higher concentration of reported
              incidents, while lighter areas show fewer reports.
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
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">data viz stuff !!!</h2>
          <div className="sectionDescription">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="sectionContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">data viz stuff !!!</h2>
          <div className="sectionDescription">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="sectionContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DataVisualizations;
