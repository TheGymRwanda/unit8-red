import Image from "next/image";
export default function ProjectCard({ src, text, id, show }) {
  return (
    <div
      className={`xl:absolute w-full duration-300 ease-out  transition-all ${
        id === show ? "opacity-100 pt-3.5 h-auto" : "opacity-0 xl:pt-3.5 h-0"
      }`}
    >
      <div className="relative w-full xl:h-111 drop-shadow-sm rounded-xl">
        <Image
          src={src}
          priority
          className="object-cover xl:hidden"
          width={500}
          height={500}
          style={{width: "100%", height: "auto"}}
          alt=""
        />
        <Image
          src={src}
          priority
          className="object-contain hidden xl:block"
          fill
          alt=""
        />
      </div>
      {id === show && <p className="mt-2">{text}</p>}
    </div>
  );
}
