function Home() {
  return (
    <div className="contentContainer">
      <section className="contentSection">
        <div className="sectionRow">
          <h2
            className="sectionHeader"
            style={{
              width: "fit-content",
              padding: "0",
            }}
          >
            Who Made This Site?
          </h2>
        </div>
        <div className="sectionContent">
          <div className="whoAreWeContainer">
            <div className="whoAreWeCard">
              <p className="whoAreWeInfo">
                <strong>Jonah Zimmer</strong> (he/him)
              </p>
              <p className="whoAreWeInfo">Computer Science Major</p>
              <img
                src="/images/jonah.jpeg"
                alt="Jonah Zimmer"
                className="whoAreWeImage"
              />
              <a
                href="mailto:jzimmer@macalester.edu"
                className="whoAreWeEmailButton"
              >
                jzimmer@macalester.edu
              </a>
              <p className="whoAreWeWhatWeDid">
                Data Parsing, Visualizations, Copywriting, and Development
              </p>
            </div>

            <div className="whoAreWeCard">
              <p className="whoAreWeInfo">
                <strong>Nelson Mondale</strong> (he/him)
              </p>
              <p className="whoAreWeInfo">Media and Cultural Studies Major</p>
              <img
                src="/images/nelson.jpg"
                alt="Nelson Mondale"
                className="whoAreWeImage"
              />
              <a
                href="mailto:nmondale@macalester.edu"
                className="whoAreWeEmailButton"
              >
                nmondale@macalester.edu
              </a>
              <p className="whoAreWeWhatWeDid">
                UI/UX Design, Visualizations, Data Parsing, and Development
              </p>
            </div>

            <div className="whoAreWeCard">
              <p className="whoAreWeInfo">
                <strong>Allen Long</strong> (he/him)
              </p>
              <p className="whoAreWeInfo">Major Undeclared</p>
              <img
                src="/images/allen.jpeg"
                alt="Allen Long"
                className="whoAreWeImage"
              />
              <a
                href="mailto:along1@macalester.edu"
                className="whoAreWeEmailButton"
              >
                along1@macalester.edu
              </a>
              <p className="whoAreWeWhatWeDid">
                Community Form Design, Form Research, and Copywriter
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">Why Did They Make it?</h2>
          <div className="sectionDescription">
            <p>
              In COMP194: Critical Race and Digital Studies, we have discussed
              the ways that policing and surveillance impact communities. This
              inspired us to look into the ways that security impacts our own
              college campus community. We wanted to include Public Safety's
              perspective as well as those of the students, faculty, and staff.
              The first dataset we used is the one created by Macalester
              Department of Public Safety. The link can be found on the Incident
              Data tab of this site. The second data set we wanted to create by
              surveying members of the Macalester community. These two datasets
              together could create a more holistic display of how Public Safety
              interacts with the Macalester community. Though we were not able
              to send out the survey, we found the creation of the survey to be
              thought provoking, and hope that you will read through the
              questions and consider how they relate to your experience.
            </p>

            <p>
              As three white male students, our gender and racial identities
              impact the way we interact with Public Safety. Though we
              approached this project with the intention to minimize bias and
              promote awareness around the impacts of Public Safety, we are
              unavoidably influenced by our subconscious biases, which may have
              inadvertently impacted decisions around data cleaning, choices of
              which visualizations to include, and the creation of our survey.
            </p>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionRow">
          <h2 className="sectionHeader">How Did They Make it?</h2>
          <div className="sectionDescription">
            <p>
              In a technical sense, we created the site using React, and created
              the visualizations using Python, Tableau, and ArcGIS. The crime
              data was pulled from Macalester’s publicly available crime data,
              and scraped using PyPDF2’s pdf reader. You can see more about the
              decisions we made in cleaning the data next to each visualization,
              and you can see the raw data and code on the tab “Incident
              Data/Code.”
            </p>
          </div>
        </div>
        <div className="sectionContent">
          <p>
            The final component of the site is the survey. Though we did not
            collect data with this survey, we present the survey questions on
            the site as well as the research and decision making that went into
            minimizing the bias of the survey. In the future, this tab would
            allow you to fill out the survey as well as see some visualizations
            of the findings.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
