import { categorydev, categoryuser } from "@/interfaces";
import { FunctionComponent, useState } from "react";
import ToggleCategory from "./ToggleCategory";

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

const NavItemuser: FunctionComponent<{
  value: categoryuser | "All";
  handlefilterCategoryuser: Function;
}> = ({ value, handlefilterCategoryuser }) => {
  return (
    <li
      className="capitalize cursor-pointer hover:text-green-600"
      onClick={() => handlefilterCategoryuser(value)}
    >
      {value}
    </li>
  );
};

interface ProjectNavbarProps {
  handlefilterCategory: Function;
  handlefilterCategoryuser: Function;
  setActive: (value: string) => void;
}

const ProjectNavbar: FunctionComponent<ProjectNavbarProps> = ({
  handlefilterCategory,
  handlefilterCategoryuser,
  setActive,
}) => {
  const [isToggleCategory, setToggleCategory] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="px-3 py-2 flex space-x-3 overflow-x-auto list-none">
        {isToggleCategory ? (
          <>
            <NavItemDev
              value="All"
              handlefilterCategory={handlefilterCategory}
            />
            <NavItemDev
              value="UI UX"
              handlefilterCategory={handlefilterCategory}
            />
            <NavItemDev
              value="ReactJs"
              handlefilterCategory={handlefilterCategory}
            />
            <NavItemDev
              value="Nextjs"
              handlefilterCategory={handlefilterCategory}
            />
          </>
        ) : (
          <>
            <NavItemuser
              value="All"
              handlefilterCategoryuser={handlefilterCategoryuser}
            />
            <NavItemuser
              value="landing page"
              handlefilterCategoryuser={handlefilterCategoryuser}
            />
            <NavItemuser
              value="Ecommerce"
              handlefilterCategoryuser={handlefilterCategoryuser}
            />
          </>
        )}
      </div>
      <ToggleCategory
        onClickToggle={() => {
          setToggleCategory(!isToggleCategory);
          setActive("All");
        }}
      />
    </div>
  );
};

export default ProjectNavbar;
