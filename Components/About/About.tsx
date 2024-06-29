import { services } from "@/utils/data";
import ServiceCard from "./ServiceCard";

export default function About() {
  return (
    <div className="flex flex-col shrink px-6 pt-1">
      <h6 className="my-3 text-base font-medium">
        Greetings! I'm Abdelrhman, a passionate Front-End Web Developer with
        expertise in HTML, CSS, JavaScript, React.js, TypeScript, and Next.js.
        With one years of hands-on experience, I've honed my skills in crafting
        visually stunning and highly functional web applications that captivate
        users and drive engagement.
      </h6>
      <div
        className="shrink p-4 mt-5 bg-gray-400 dark:bg-black-100"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
