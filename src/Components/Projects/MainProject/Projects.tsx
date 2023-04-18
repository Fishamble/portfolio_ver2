import { wrapGrid } from "animate-css-grid";
import { useContext, useEffect, useRef } from "react";
import OtherProjects from "../OtherProjects/OtherProjects";
import KitchenDisplayImage from "./KitchenDisplayImage";
import PosDescription from "./PosDescription";
import PosImage from "./PosImage";
import TextScrollHighlight from "./TextScrollHighlight";
import YouTube from "./YouTube";

import "./ImageOverlay.css";
import "./Projects.css";
import { PortfolioContext } from "../../../Context/PortfolioContext";

export default function Projects() {
  //ref for animating hero
   const { project1Ref } = useContext(PortfolioContext);


  useEffect(() => {
    if (project1Ref.current) {
      // wrap grid is used to animate the youtube react-player component
      wrapGrid(project1Ref.current, {
        duration: 350,
        // onStart: () => console.log("started anim")
      });
    }
  }, [project1Ref]);

  return (
    <section className="projects" id="projects" ref={project1Ref}>
      <div className="container">
        <TextScrollHighlight>
          <h2>Projects</h2>
        </TextScrollHighlight>
        <div className="project1" >
          <PosDescription />
          <PosImage />
          <KitchenDisplayImage />
          <YouTube />
        </div>
        <hr />
        <OtherProjects />
      </div>
    </section>
  );
}
