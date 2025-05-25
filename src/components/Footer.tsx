function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h3 className="footerHeading">About</h3>
          <p>
            A data visualization web project examining campus public safety data
            at Macalester College, focusing on how public safety functions on
            campus rather than just empirical descriptions of criminal activity.
          </p>
        </div>
        <div className="footerSection">
          <h3 className="footerHeading">Contact</h3>
          <ul className="footerList">
            <li>
              <a href="mailto:jzimmer@macalester.edu">
                Jonah Zimmer (Data & Development)
              </a>
            </li>
            <li>
              <a href="mailto:nmondale@macalester.edu">
                Nelson Mondale (UI/UX & Development)
              </a>
            </li>
            <li>
              <a href="mailto:along1@macalester.edu">
                Allen Long (Development)
              </a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3 className="footerHeading">Resources</h3>
          <ul className="footerList">
            <li>
              <a
                href="https://www.macalester.edu/public-safety/cleryact/crime_fire_log/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Public Safety Crime Log
              </a>
            </li>
            <li>
              <a
                href="https://www.macalester.edu/public-safety/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Macalester Public Safety
              </a>
            </li>
            <li>
              <a
                href="https://github.com/macalester-public-safety/public-safety-data"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
