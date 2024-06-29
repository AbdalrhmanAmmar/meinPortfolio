import { Skill } from "@/interfaces";
import { FunctionComponent } from "react";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white  rounded-full bg-blue-500 ">
      <div className="w-[50%] flex items-center px-4 py-1 rounded-full bg-red">
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;
