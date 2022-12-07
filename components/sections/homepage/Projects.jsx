import { useEffect, useRef, useState } from "react";
import ProjectTitle from "../../ui/ProjectTitle";
import Wrapper from "../../layout/Wrapper";
import ProjectCard from "../../ui/ProjectCard";
import data from "../../../data/projectCard";
import Link from "next/link";

export default function Projects() {
  const [show, setShow] = useState();
  const handleHover = (value) => {
    return function (event) {
      setShow(value);
    };
  };
  const handleMouseOut = async () => {
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
    return function(event) {
      if (show === value) return setShow(null);
      setShow(value)
    }
  }
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
          <ProjectTitle
            handle={handleHover(1)}
            remove={handleMouseOut}
            show={show}
            href="https://dacade.org/"
          >
            Dacade
          </ProjectTitle>

          <ProjectTitle
            handle={handleHover(2)}
            remove={handleMouseOut}
            href="https://www.bitlipa.com/"
          >
            Bitlipa
          </ProjectTitle>
          <ProjectTitle
            handle={handleHover(3)}
            remove={handleMouseOut}
            href="https://www.symplifi.co/"
          >
            Symplifi
          </ProjectTitle>
          <ProjectTitle
            handle={handleHover(4)}
            remove={handleMouseOut}
            href="https://utu.io/"
          >
            UTU.io
          </ProjectTitle>
          <ProjectTitle
            handle={handleHover(5)}
            remove={handleMouseOut}
            href="https://neueux.com/apps"
          >
            NeueUX
          </ProjectTitle>
          <ProjectTitle
            handle={handleHover(6)}
            remove={handleMouseOut}
            href="/"
          >
            Lab3
          </ProjectTitle>
          <ProjectTitle
            handle={handleHover(7)}
            remove={handleMouseOut}
            href="https://evenmusic.co/"
          >
            Even
          </ProjectTitle>
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
