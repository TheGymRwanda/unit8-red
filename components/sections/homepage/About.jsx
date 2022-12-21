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
      "transition-all ease-in-out duration-300 mt-2 absolute h-0.4 bg-purple  bottom-0  ";
    return tabValue === 1
      ? `w-24 left-0 ${defaultStyle}`
      : tabValue === 2
      ? `w-32.25 md:left-17.25 xl:left-34 ${defaultStyle}`
      : `md:w-16 xl:w-16.25 md:left-78 xl:left-76.5 ${defaultStyle}`;
  }
  return (
    <Wrapper>
      <div className=" hidden md:block mb-17.76  xl:max-w-4xl lg:max-w-3xl ml-auto">
        <div className="flex  md:gap-10.75 lg:gap-10.25 w-fit  mb-5 relative">
          {data.map((value, index) => {
            return (
              <h3
                key={index}
                onClick={() => setTabValue(index + 1)}
                className={activeStyle(index)}
              >
                {value.title}
              </h3>
            );
          })}
          <span className={undelineStyle()}></span>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index}>
              {tabValue === index + 1 ? (
                <div className="min-h-103.5">
                  {element.paragraphy1 !== null && (
                    <p>
                      {element.paragraphy1}
                      <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                        Learn more
                      </Anchor>
                    </p>
                  )}
                  {element.paragraphy1 !== null ? (
                    <p 
                    className="md:pt-7.5 lg:pt-7"
                    >
                     {element.paragraphy2}
                    </p>
                  ):(
                    <p>
                      {element.paragraphy2}
                      <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                        more
                      </Anchor>
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="space-y-5.3  block md:hidden ">
        {data.map((element, index) => (
          <AboutContent
            key={element.id}
            index={index}
            title={element.title}
            paragraphy1={element.paragraphy1}
            paragraphy2={element.paragraphy2}
            setTabValue={setTabValue}
            tabValue={tabValue}
          />
        ))}
      </div>
    </Wrapper>
  );
}
