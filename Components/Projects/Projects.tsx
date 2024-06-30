"use client";
import { projectsdata } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import ProjectNavbar from "./ProjectNavbar";
import { useState } from "react";
import { categorydev, categoryuser } from "@/interfaces";

function Projects() {
  const [Projects, setProjects] = useState(projectsdata);
  const [Active, setActive] = useState("all");

  const handlefilterCategorydev = (Category: categorydev | "All") => {
    if (Category === "All") {
      setProjects(projectsdata);
      setActive(Category);

      return;
    }
    const NewProjectdata = projectsdata.filter((project) =>
      project.category.includes(Category)
    );
    setProjects(NewProjectdata);
    setActive(Category);
    console.log(Projects);
  };
  const handlefilterCategoryuser = (Categoryuser: categoryuser | "All") => {
    if (Categoryuser === "All") {
      setProjects(projectsdata);
      setActive(Categoryuser);

      return;
    }
    const NewProjectdata = projectsdata.filter((project) =>
      project.categoryuser.includes(Categoryuser)
    );
    setProjects(NewProjectdata);
    setActive(Categoryuser);
    console.log(Projects);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <nav>
        <ProjectNavbar
          setActive={setActive}
          handlefilterCategory={handlefilterCategorydev}
          handlefilterCategoryuser={handlefilterCategoryuser}
        />
      </nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {Projects.map((project) => (
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
