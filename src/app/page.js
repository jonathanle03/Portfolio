import Projects from "@/components/Projects";
import projectData from "@/data/ProjectData";

const Home = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-1 w-10/12 gap-y-4">
        {Object.keys(projectData).map((data, index) => (
          <Projects
            className="flex justify-around"
            key={index}
            title={data}
            data={projectData[data]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
