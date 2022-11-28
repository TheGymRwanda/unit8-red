import { useState } from "react";
import Wrapper from "../../layout/Wrapper";
import Anchor from "../../ui/Anchor";

export default function About() {
  const [tabValue, setTabValue] = useState(1);
  // this function used in onclick event to set color to purple on the tab
  function activeStyle(key) {
    return tabValue === key + 1 ? "text-purple" : "cursor-pointer";
  }
  // this function used to set undeline line on all tabs
  function undelineStyle() {
    let defaultStyle =
      "transition-all ease-in-out duration-300 pt-2 absolute border-b-1.5  bottom-0 border-purple ";
    return tabValue === 1
      ? `${defaultStyle} w-24 left-0`
      : tabValue === 2
      ? `${defaultStyle} w-32.25 md:left-17.25 xl:left-34`
      : `${defaultStyle}  md:w-16 xl:w-16.25 md:left-78 xl:left-76.5`;
  }
  return (
    <Wrapper>
      <div className=" hidden md:block mb-17.76  xl:max-w-4xl lg:max-w-3xl ml-auto">
        <div className="flex  md:gap-10.75 lg:gap-10.25 w-fit xl:gap-10 mb-5 relative">
          {["About us", "What We do", "Hiring"].map((v, k) => {
            return (
              <h3
                key={k}
                onClick={() => setTabValue(k + 1)}
                className={activeStyle(k)}
              >
                {v}
              </h3>
            );
          })}
          <span className={undelineStyle()}></span>
        </div>
        <p>
          Blockchain will do for cooperation what the internet did for
          communication - We believe that blockchain technology has the
          potential to shift financial models as we know them, creating revenue
          streams that are more sustainable and fair for users. We envision a
          future in which financial infrastructures are rather decentralised and
          horizontal, in which any member can have a say. Through its
          immutability, blockchain technology provides trustworthy
          infrastructures that allow cooperation on a large scale.
          <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
            Learn more
          </Anchor>
        </p>
        <p className=" md:pt-7.5 lg:pt-7 ">
          Work Meaningful - With our work, we aim to impact society positively.
          The projects we get involved with the aim to solve significant
          problems in our society, sustainably and in the long run, rather than
          looking for a quick profit through speculation or encouraging harmful
          behavior.
        </p>
      </div>
      <div className="space-y-5.3  block md:hidden">
        <div>
          <div
            onClick={() =>
              tabValue === 1 ? setTabValue(null) : setTabValue(1)
            }
            className={`flex items-center justify-between  border-b ${
              tabValue === 1 ? "border-purple" : "border-black"
            }`}
          >
            <h3 className={tabValue === 1 ? "text-purple" : "text-black"}>
              About us
            </h3>
            <svg
              className={
                tabValue === 1
                  ? "stroke-purple -rotate-90 transition-all ease-in-out duration-300 "
                  : "stroke-black rotate-90 transition-all ease-in-out duration-300 "
              }
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0244 2.47485L18.899 10.3495L11.0244 18.2241"
                stroke-width="1.5"
              />
              <line
                x1="18.8989"
                y1="10.1995"
                x2="-0.0001095"
                y2="10.1995"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className=" relative overflow-hidden">
            <div
              className={
                tabValue === 1
                  ? " pb-14.21 transition-all ease-in-out duration-300 opacity-100 top-0 h-fit"
                  : " pb-0 transition-all ease-in-out duration-300 opacity-10 relative -top-96 h-0"
              }
            >
              <p className="pt-4.75">
                Blockchain will do for cooperation what the internet did for
                communication - We believe that blockchain technology has the
                potential to shift financial models as we know them, creating
                revenue streams that are more sustainable and fair for users. We
                envision a future in which financial infrastructures are rather
                decentralised and horizontal, in which any member can have a
                say. Through its immutability, blockchain technology provides
                trustworthy infrastructures that allow cooperation on a large
                scale.
                <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                  Learn more
                </Anchor>
              </p>
              <p className="pt-5.5">
                Work Meaningful - With our work, we aim to impact society
                positively. The projects we get involved with the aim to solve
                significant problems in our society, sustainably and in the long
                run, rather than looking for a quick profit through speculation
                or encouraging harmful behavior.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              tabValue === 2 ? setTabValue(null) : setTabValue(2)
            }
            className={`flex items-center justify-between  border-b ${
              tabValue === 2 ? "border-purple" : "border-black"
            }`}
          >
            <h3 className={tabValue === 2 ? "text-purple" : "text-black"}>
              What We do
            </h3>
            <svg
              className={
                tabValue === 2
                  ? "stroke-purple -rotate-90 transition-all ease-in-out duration-300"
                  : "stroke-black rotate-90 transition-all ease-in-out duration-300"
              }
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0244 2.47485L18.899 10.3495L11.0244 18.2241"
                stroke-width="1.5"
              />
              <line
                x1="18.8989"
                y1="10.1995"
                x2="-0.0001095"
                y2="10.1995"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="relative overflow-hidden">
            <div
              className={
                tabValue === 2
                  ? " pb-14.21 transition-all ease-in-out duration-300 opacity-100 top-0 h-fit"
                  : " pb-0 transition-all ease-in-out duration-300 opacity-10 relative -top-96 h-0"
              }
            >
              <p className="pt-4.75">
                Blockchain will do for cooperation what the internet did for
                communication - We believe that blockchain technology has the
                potential to shift financial models as we know them, creating
                revenue streams that are more sustainable and fair for users. We
                envision a future in which financial infrastructures are rather
                decentralised and horizontal, in which any member can have a
                say. Through its immutability, blockchain technology provides
                trustworthy infrastructures that allow cooperation on a large
                scale.
                <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                  Learn more
                </Anchor>
              </p>
              <p className="pt-5.5">
                Work Meaningful - With our work, we aim to impact society
                positively. The projects we get involved with the aim to solve
                significant problems in our society, sustainably and in the long
                run, rather than looking for a quick profit through speculation
                or encouraging harmful behavior.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              tabValue === 3 ? setTabValue(null) : setTabValue(3)
            }
            className={`flex items-center justify-between  border-b ${
              tabValue === 3 ? "border-purple" : "border-black"
            }`}
          >
            <h3 className={tabValue === 3 ? "text-purple" : "text-black"}>
              Employment
            </h3>
            <svg
              className={
                tabValue === 3
                  ? "stroke-purple -rotate-90 transition-all ease-in-out duration-300"
                  : "stroke-black rotate-90 transition-all ease-in-out duration-300"
              }
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0244 2.47485L18.899 10.3495L11.0244 18.2241"
                stroke-width="1.5"
              />
              <line
                x1="18.8989"
                y1="10.1995"
                x2="-0.0001095"
                y2="10.1995"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className=" relative overflow-hidden">
            <div
              className={
                tabValue === 3
                  ? " pb-14.21 transition-all ease-in-out duration-300 opacity-100 top-0 h-fit"
                  : " pb-0 transition-all ease-in-out duration-300 opacity-10 relative -top-96 h-0"
              }
            >
              <p className="pt-4.75">
                Blockchain will do for cooperation what the internet did for
                communication - We believe that blockchain technology has the
                potential to shift financial models as we know them, creating
                revenue streams that are more sustainable and fair for users. We
                envision a future in which financial infrastructures are rather
                decentralised and horizontal, in which any member can have a
                say. Through its immutability, blockchain technology provides
                trustworthy infrastructures that allow cooperation on a large
                scale.
                <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                  Learn more
                </Anchor>
              </p>
              <p className="pt-5.5">
                Work Meaningful - With our work, we aim to impact society
                positively. The projects we get involved with the aim to solve
                significant problems in our society, sustainably and in the long
                run, rather than looking for a quick profit through speculation
                or encouraging harmful behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
