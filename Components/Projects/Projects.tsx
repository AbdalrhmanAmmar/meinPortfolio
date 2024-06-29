"use client";
import { projectsdata } from "@/utils/data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <nav>Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projectsdata.map((project) => (
          <>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProjectCard project={project} key={project.name} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
