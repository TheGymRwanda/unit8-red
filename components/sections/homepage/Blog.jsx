import Image from "next/image";
import Wrapper from "../../layout/Wrapper";
import rightArrowBlue from "/public/assets/icons/blue-right-arrow.svg";
import leftArrow from "/public/assets/icons/gray-left-arrow.svg";
import leftArrowBlue from "/public/assets/icons/blue-left-arrow.svg";
import data from "../../../data/blogCard";
import BlogCard from "../../ui/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
export default function Blog() {
  const [blog, setBlog] = useState(data);
  const [slide, setSlide] = useState();
  const [atStart, setAtStart] = useState(true);
  const [getWindow, setWindow] = useState(true);
  const nexto = () => {
    slide.slideNext();
  };
  const prevo = () => {
    // c
    slide.slidePrev();
  };
  useEffect(() => {
    setWindow(window);
  }, []);
  return (
    <section className="mt-27.79 mb-31.75 overflow-hidden">
      <Wrapper>
        <div className="flex gap-4.25 mb-5 md:mb-8">
          <h3>Blog</h3>
          <div className="flex gap-2.16">
            <Image
              className="cursor-pointer swiper-button-next"
              src={atStart === true ? leftArrow : leftArrowBlue}
              onClick={prevo}
              alt=""
            />
            <Image
              className="cursor-pointer"
              onClick={nexto}
              src={rightArrowBlue}
              alt=""
            />
          </div>
        </div>
      </Wrapper>
      <div className="">
        <div
          style={{ marginLeft: atStart ? "100px" : "0px" }}
          className="flex gap-5 md:gap-6 w-full  "
        >
          {console.log(getWindow.innerWidth)}
          <Swiper
            spaceBetween={20}
            slidesPerView={
              getWindow.innerWidth > 2000
                ? 12
                : getWindow.innerWidth < 990
                ? 2
                : getWindow.innerWidth < 600
                ? 1
                : 3
            }
            onSlideChange={(e) => {
              if (e.realIndex === 0) {
                setAtStart(true);
              } else {
                setAtStart(false);
              }
            }}
            onSwiper={(s) => {
              setSlide(s);
            }}
            onReachEnd={(e) => {
              setBlog(blog.concat(data));
            }}
          >
            {blog.map((el, k) => (
              <SwiperSlide key={k}>
                <BlogCard
                  key={el.id}
                  date={el.date}
                  title={el.title}
                  subtitle={el.subtitle}
                  tags={el.tag}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
