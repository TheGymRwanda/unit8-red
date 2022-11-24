import { useEffect, useRef, useState } from "react";
import ProjectTitle from "../../layout/ProjectTitle";
import Wrapper from "../../layout/Wrapper";
import ProjectCard from "../../ui/ProjectCard";
import data from "../../../data/projectCard";

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
  const cards = data.map(el => <ProjectCard src={el.src} key={el.id} text={el.text} id={el.id} show={show} />)
  return (
    <Wrapper>
      <h3 className="mb-2.75 pl-1">Projects</h3>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
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
        <div className="min-w-[811px] relative">{cards}</div>
      </div>
    </Wrapper>
  );
}
