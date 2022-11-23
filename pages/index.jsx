import Anchor from "../components/ui/Anchor";
import Link from "../components/ui/Anchor";

export default function Home() {
  return (
    <div className="px-10">
    <h1 className="text-4xl  text-center">
      <span className="text-red-500"> RED!</span> coming soon
    
    </h1>
    <Anchor href='https://www.youtube.com/' >Contact us</Anchor>
    </div>
    
  );
}
