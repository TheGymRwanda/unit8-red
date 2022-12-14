import Wrapper from "../../layout/Wrapper";
import { dataPrimary, dataSecondary } from "../../../data/expertiseList";
export default function Expertise() {
  return (
    <Wrapper>
      <div className="mt-21.25 mb-20.25 sm:mt-21.25 sm:mb-33 md:mt-22.87 lg:mt-25.75 md:mb-35.55 xl:mt-31.75 xl:mb-24 w-64.37 md:w-151.25 xl:w-161.5 ml-auto">
        <h3 className="pb-1.75 md:pb-6">Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6.23 xl:gap-x-6">
          <div className="space-y-2 md:space-y-3">
            {dataPrimary.map((element,index) => (
              <p className="border-b border-grey-300" key={index}>{element}</p>
            ))}
          </div>
          <div className="space-y-2 md:space-y-3 pt-3 md:pt-0">
            {dataSecondary.map((element,index) => (
              <p className="border-b border-grey-300" key={index}>{element}</p>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
