import About from "@/components/About";
import Projects from "@/components/Projects";
import projectData from "@/data/ProjectData";

const projectColors = {
  websites: "shadow-orange-400",
  projects: "shadow-yellow-400",
};

const projectBorders = {
  websites: "border-orange-800",
  projects: "border-yellow-800",
};

const Home = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-1 w-10/12 gap-y-4">
        <About />
        {Object.keys(projectData).map((data, index) => (
          <Projects
            className="flex justify-around"
            key={index}
            title={data}
            data={projectData[data]}
            color={projectColors[data]}
            border={projectBorders[data]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
