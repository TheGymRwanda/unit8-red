import Wrapper from "../components/layout/Wrapper";
import Anchor from "../components/ui/Anchor";


export default function Home() {
  return (
    <Wrapper>
      <h1 className="text-4xl  text-center bg-green-200">
        <span className="text-red-500"> RED!</span> coming soon
      </h1>
      <Anchor href='https://www.youtube.com/' >Contact us</Anchor>
    </Wrapper>
  );
}
