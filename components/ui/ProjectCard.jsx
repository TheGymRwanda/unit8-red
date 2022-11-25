import Image from "next/image";
export default function ProjectCard({ src, text, id, show }) {
  return (
    <div
      className={`absolute w-full duration-300 ease-out  transition-all ${
        id === show ? "opacity-100 pt-3.5" : "opacity-0 pt-3.5"
      }`}
    >
      <div className="relative h-111 w-full drop-shadow-sm rounded-xl">
        <Image
          src={src}
          priority
          className="object-cover"
          fill
          alt=""
        />
      </div>
      {id === show && <p className="mt-2">{text}</p>}
    </div>
  );
}
