import Tag from "../components/ui/Tag";
import Wrapper from "../components/layout/Wrapper";
import Anchor from "../components/ui/Anchor";

export default function Home() {
  return (
    <Wrapper>
      <h1 className="text-4xl  text-center bg-green-200">
        <span className="text-red-500"> RED!</span> coming soon
      </h1>
      <Anchor href="https://www.youtube.com/">Contact us</Anchor>
      <div className="w-fit m-auto">
        <Tag>02 Oct 2022</Tag>
        <Tag fill>DAOs</Tag>
      </div>
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <h2>The quick brown fox jumps over the lazy dog</h2>
      <h3>The quick brown fox jumps over the lazy dog</h3>
      <p>The quick brown fox jumps over the lazy dog</p>
    </Wrapper>
  );
}
