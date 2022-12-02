import React from "react";
import Wrapper from "../../layout/Wrapper";
import Anchor from "../../ui/Anchor";

export default function Hero() {
  return (
    <Wrapper>
      <div className="flex flex-col gap-y-4.48 md:gap-y-5.3 lg:flex-row justify-between pt-6.75 md:pt-12 pb-8.25 md:pb-16.69 lg:pb-26 xl:pb-34   gap-x-25.25">
        <div>
          <p className="w-max">Ape Unit</p>
        </div>
        <div className="xl:max-w-4xl lg:max-w-3xl ">
          <p className="md:hidden">
            Unit➇ is a pioneering technology and marketing services company that
            creates end-to-end digital experiences for brands such as 
            <span className="text-purple">
            &nbsp;  Google, Philips, Audi, Twitch, Patagonia, eBay &nbsp;
            </span>
             and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.&nbsp;
            <Anchor href="web3@apeunit.com">Contact us</Anchor>
          </p>
          <p className="hidden md:block">
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including
            <span className="text-purple">
            &nbsp;  Ethereum, Tezos, Near, Algorand, Celo &nbsp;
            </span>
           and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.&nbsp;
            <Anchor href="web3@apeunit.com"> Contact us </Anchor>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
