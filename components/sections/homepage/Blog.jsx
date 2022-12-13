import data from "../../../data/blogCard";
import BlogCard from "../../ui/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";
import BlogHeader from "../../ui/BlogHeader";
export default function Blog() {
  const [blog, setBlog] = useState(data);
  const [slide, setSlide] = useState();
  const [atStart, setAtStart] = useState(true);
  const [windowWidth, setWindowWidth] = useState();
  const setWindowDimensions = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);
  SwiperCore.use([Mousewheel]);
  const nextSlide = () => {
    slide.slideNext();
  };
  const previousSlide = () => {
    slide.slidePrev();
  };
  useEffect(() => {
    if (blog.length > 10) {
      let newArray = blog.slice(0, 5);
      setBlog(newArray);
    }
  }, [blog]);
  return (
    <section className="mt-27.79 mb-31.75 overflow-hidden">
      <div className="m-auto max-w-screen-2xl">
        <BlogHeader
          previousSlide={previousSlide}
          nextSlide={nextSlide}
          atStart={atStart}
        />
        <div
          className={
            atStart
              ? "relative  left-5 right-5 md:left-9 md:right-16 2xl:left-26"
              : ""
          }
        >
          <div className="flex gap-5 md:gap-6 m-auto">
            <Swiper
              spaceBetween={24}
              style={{ paddingBottom: "0.75rem" }}
              slidesPerView={
                windowWidth < 500
                  ? 1.1
                  : windowWidth < 834
                  ? 1.4
                  : windowWidth < 1024
                  ? 1.8
                  : 3
              }
              onSlideChange={(event) =>
                event.realIndex === 0 ? setAtStart(true) : setAtStart(false)
              }
              onSwiper={(slide) => setSlide(slide)}
              onReachEnd={(event) => setBlog(blog.concat(data))}
              direction={"horizontal"}
              mousewheel={{
                forceToAxis: true,
                sensitivity: -10,
                thresholdDelta: 14,
              }}
            >
              {blog.map((element, key) => (
                <SwiperSlide
                  className="min-w-sm md:min-w-md xl:min-w-lg box-border p-5 flex flex-col rounded-sm border-0.25 border-solid border-grey-400 shadow-md gap-9.5 justify-between"
                  key={key}
                >
                  <BlogCard
                    key={element.id}
                    date={element.date}
                    title={element.title}
                    subtitle={element.subtitle}
                    tags={element.tag}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
