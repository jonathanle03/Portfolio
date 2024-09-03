import Image from "next/image";

const Project = ({ name, image, website, github, color, border }) => {
  return (
    <div className="flex-none flex-col">
      <div
        className={`flex justify-center items-center group relative border-2 ${border} shadow-[8px_10px] ${color} mb-4 mr-6`}
      >
        <Image
          className="group-hover:brightness-50"
          src={image}
          alt={name}
          style={{ width: "320px", height: "180px" }}
        />
        <div className="absolute group-hover:flex justify-center items-center text-white text-xl hidden">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Project;
