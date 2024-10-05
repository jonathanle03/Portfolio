import Title from "./Title";
import Image from "next/image";
import jonathanLe from "../../public/assets/jonathanLe.jpg";

const About = () => {
  return (
    <div className="flex-col">
      <Title text={"Who is Jonathan Le?"} />
      <div className="grid grid-cols-3">
        <Image
          className=""
          src={jonathanLe}
          alt={"Jonathan Le"}
          style={{ width: "480px", height: "320px" }}
        />
        <div className="max-w-full col-span-2">
          I am currently an undergraduate student at the University of
          California, Riverside (UCR) pursuing a Bachelor's of Science in
          Computational Mathematics. As a project lead at UCR's Association for
          Computing Machinery (ACM), I primarily work on websites for other
          student organizations. My work consists of developing frontend
          components, mediating between student organizations and UIUX
          designers, and performing traditional leadership responsibilities.
        </div>
      </div>
    </div>
  );
};

export default About;
