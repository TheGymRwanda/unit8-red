import data from "../../../data/aboutContent";
import AboutContent from "../../ui/AboutContent";
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
        <div className="flex  md:gap-10.75 lg:gap-10.25 w-fit  mb-5 relative">
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
        {data.map((el, index) => {
          return (
            <div key={index}>
              {tabValue === index + 1 ? (
                <div className="min-h-103.5">
                  {el.paragraphy1 !== null && (
                    <p>
                      {el.paragraphy1}
                      <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                        Learn more
                      </Anchor>
                    </p>
                  )}
                  <p
                    className={`${
                      el.paragraphy1 === null ? "" : "md:pt-7.5 lg:pt-7"
                    }`}
                  >
                    {el.paragraphy2}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="space-y-5.3  block md:hidden ">
        {data.map((el, k) => (
          <AboutContent
            key={el.id}
            index={k}
            title={el.title}
            paragraphy1={el.paragraphy1}
            paragraphy2={el.paragraphy2}
            setTabValue={setTabValue}
            tabValue={tabValue}
          />
        ))}
      </div>
    </Wrapper>
  );
}
