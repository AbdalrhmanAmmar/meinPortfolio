import { categorydev } from "@/interfaces";
import { listeners } from "process";
import { FunctionComponent } from "react";

const NavItemDev: FunctionComponent<{
  value: categorydev | "All";
  handlefilterCategory: Function;
}> = ({ value, handlefilterCategory }) => {
  return (
    <li
      className="capitalize cursor-pointer hover:text-green-600"
      onClick={() => handlefilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{ handlefilterCategory: Function }> = (
  props
) => {
  return (
    <div className="px-3 py-2  flex space-x-3 overflow-x-auto list-none  ">
      <NavItemDev value="All" {...props} />
      <NavItemDev value="UI UX" {...props} />
      <NavItemDev value="ReactJs" {...props} />
      <NavItemDev value="Nextjs" {...props} />
    </div>
  );
};

export default ProjectNavbar;
