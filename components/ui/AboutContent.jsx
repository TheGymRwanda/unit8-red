import data from "../../data/aboutContent";
import Image from "next/image";
import Anchor from "./Anchor";
import Arrow from "../../public/assets/icons/right-arrow.svg";
import ArrowBlue from "../../public/assets/icons/blue-right-arrow.svg";
export default function AboutContent({
  title,
  paragraphy1,
  paragraphy2,
  setTabValue,
  tabValue,
  index,
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        onClick={() =>
          tabValue === index + 1 ? setTabValue(null) : setTabValue(index + 1)
        }
        className={`flex items-center justify-between  border-b ${
          tabValue === index + 1 ? "border-purple" : "border-black"
        }`}
      >
        <h3 className={tabValue === index + 1 ? "text-purple" : "text-black"}>
          {title}
        </h3>
        <Image
          src={tabValue === index + 1 ? ArrowBlue : Arrow}
          alt=""
          className={
            tabValue === index + 1
              ? "stroke-purple invert-[red] -rotate-90 transition-all ease-in-out duration-300 "
              : "stroke-black rotate-90 transition-all ease-in-out duration-300 "
          }
        />
      </div>
      <div className="relative overflow-hidden">
        <div
          className={
            tabValue === index + 1
              ? " pb-14.21 transition-all ease-in-out duration-300 opacity-100 top-0 h-fit relative overflow-hidden"
              : " pb-0 transition-all ease-in-out duration-300 opacity-10 relative -top-96 h-0 overflow-hidden"
          }
        >
          {paragraphy1 !== null && (
            <p className="pt-4.75">
              {paragraphy1}
              <Anchor href="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">
                Learn more
              </Anchor>
            </p>
          )}

          <p className="pt-5.5">{paragraphy2}</p>
        </div>
      </div>
    </div>
  );
}
