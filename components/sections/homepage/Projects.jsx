import { useState } from "react";
import ProjectTitle from "../../ui/ProjectTitle";
import Wrapper from "../../layout/Wrapper";
import ProjectCard from "../../ui/ProjectCard";
import data from "../../../data/projectCard";
import Link from "next/link";
import projectTitles from "../../../data/projectTitles";

export default function Projects() {
  const [show, setShow] = useState();
  const handleHover = (value) => {
    return () => {
      setShow(value);
    };
  };
  const handleMouseOut = () => {
    setShow(null);
  };
  const cards = data.map((el) => (
    <ProjectCard
      src={el.src}
      key={el.id}
      text={el.text}
      id={el.id}
      show={show}
    />
  ));
  const handleClick = (value) => {
    return () => {
      if (show === value) return setShow(null);
      setShow(value);
    };
  };
  const mobileCards = data.map((el) => (
    <>
      <ProjectTitle
        handle={handleClick(el.id)}
        remove={handleMouseOut}
        show={show}
        mobile
      >
        {el.name}
      </ProjectTitle>
      <Link href={el.link}>
        <ProjectCard
          src={el.src}
          key={el.id}
          text={el.text}
          id={el.id}
          show={show}
        />
      </Link>
    </>
  ));
  return (
    <Wrapper>
      <h3 className="mb-0.25 sm:mb-2.75 lg:mb-5 pl-1">Projects</h3>
      {/* deskop version */}
      <div className="xl:flex hidden justify-between relative">
        <div className="flex flex-col gap-1 md:gap-6.5 items-start">
          {projectTitles.map((title, titleKey) => (
            <ProjectTitle
              handle={handleHover(title.index)}
              remove={handleMouseOut}
              href={title.link}
              key={titleKey}
            >
              {title.name}
            </ProjectTitle>
          ))}
        </div>
        <div className="min-w-[811px]">{cards}</div>
      </div>
      {/* tablet, ipad and mobile version */}
      <div className="flex xl:hidden justify-between">
        <div className="flex flex-col gap-1 items-start w-full">
          {mobileCards}
        </div>
      </div>
    </Wrapper>
  );
}
