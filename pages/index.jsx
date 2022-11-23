import Tag from "../components/ui/Tag";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl  text-center">
        <span className="text-red-500"> RED!</span> coming soon
      </h1>
      <div className="w-fit m-auto">
        <Tag>02 Oct 2022</Tag>
        <Tag fill>DAOs</Tag>
      </div>
    </>
  );
}
