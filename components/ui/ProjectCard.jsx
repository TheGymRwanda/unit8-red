import Image from "next/image";
export default function ProjectCard({ src, text, id, show }) {
  return (
    <div
      className={` xl:mt-0 xl:absolute w-full duration-300 ease-out  transition-all ${
        id === show ? "mt-5.1575 md:mt-4.75 lg:mt-2.9 xl:pt-4.5 mb-21.6575 md:mb-15.01 lg:mb-15.15 xl:mb-0 opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
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
