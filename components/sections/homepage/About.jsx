import Wrapper from "../../layout/Wrapper";
import Anchor from "../../ui/Anchor";

export default function About() {
  return (
    <Wrapper>
      <div className="mb-17.76 xl:max-w-4xl lg:max-w-3xl ml-auto">
        <div className="flex md:gap-10.75 lg:gap-10.25 xl:gap-10 pb-5">
          <h3 className=" text-purple border-b-1.5  border-purple">About us</h3>
          <h3>What We do</h3>
          <h3>Hiring</h3>
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
    </Wrapper>
  );
}
