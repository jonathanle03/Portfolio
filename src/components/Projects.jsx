import Project from "./Project";
import Title from "./Title";

const Projects = ({ title, data, color, border }) => {
  const capitalizeString = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <div className="flex flex-col">
      <Title text={capitalizeString(title)} />
      <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar">
        {data.map((project, index) => (
          <Project
            key={index}
            className=""
            name={project.name}
            image={project.image}
            website={project.website}
            github={project.github}
            color={color}
            border={border}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
