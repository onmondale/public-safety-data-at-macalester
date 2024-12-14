import { useEffect } from "react";

interface TableauVizProps {
  id: string;
  url: string;
  name: string;
  staticImageUrl: string;
  title: string;
}

const TableauViz = ({
  id,
  url,
  name,
  staticImageUrl,
  title,
}: TableauVizProps) => {
  useEffect(() => {
    const loadTableau = () => {
      // Clean up existing visualization first
      const oldScript = document.querySelector(
        `script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]`
      );
      if (oldScript) {
        oldScript.remove();
      }

      const divElement = document.getElementById(id);
      if (divElement) {
        const vizElement = divElement.getElementsByTagName("object")[0];
        if (vizElement) {
          vizElement.style.width = "inherit";
          vizElement.style.height = divElement.offsetWidth * 0.75 + "px";

          const scriptElement = document.createElement("script");
          scriptElement.src =
            "https://public.tableau.com/javascripts/api/viz_v1.js";
          vizElement.parentNode?.insertBefore(scriptElement, vizElement);
        }
      }
    };

    const timer = setTimeout(loadTableau, 100);
    return () => {
      clearTimeout(timer);
      // Clean up on unmount
      const script = document.querySelector(
        `script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]`
      );
      if (script) {
        script.remove();
      }
    };
  }, [id, name, url]);

  return (
    <div
      className="tableauPlaceholder"
      id={id}
      style={{
        position: "relative",
        width: "80vw",
        maxWidth: "100%",
        borderRadius: "20px",
        border: "1px solid var(--text-color)",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <noscript>
        <a href="#">
          <img alt={title} src={staticImageUrl} style={{ border: "none" }} />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value={url} />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value={name} />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value={staticImageUrl} />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

export default TableauViz;
