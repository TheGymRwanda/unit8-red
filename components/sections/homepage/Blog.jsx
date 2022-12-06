import Image from "next/image";
import Wrapper from "../../layout/Wrapper";
import rightArrowBlue from "/public/assets/icons/blue-right-arrow.svg";
import leftArrow from "/public/assets/icons/gray-left-arrow.svg";
import leftArrowBlue from "/public/assets/icons/blue-left-arrow.svg";
import data from "../../../data/blogCard";
import BlogCard from "../../ui/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from 'swiper'
import "swiper/css";
import { useEffect, useState } from "react";
export default function Blog() {
  const [blog, setBlog] = useState(data);
  const [slide, setSlide] = useState();
  const [atStart, setAtStart] = useState(true);
  const [windowWidth, setWindowWidth] = useState()
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])
  SwiperCore.use([Mousewheel])
  const nexto = () => {
    slide.slideNext();
  };
  const prevo = () => {
    slide.slidePrev();
  };

  return (
    <section className="mt-27.79 mb-31.75 overflow-hidden">
      <div className="m-auto max-w-screen-2xl">
        <Wrapper>
          <div className="flex gap-4.25 mb-5 md:mb-8 ">
            <h3>Blog</h3>
            <div className="flex gap-2.16">
              <Image
                className="cursor-pointer swiper-button-next"
                src={atStart === true ? leftArrow : leftArrowBlue}
                onClick={prevo}
                alt="left Icon"
              />
              <Image
                className="cursor-pointer"
                onClick={nexto}
                src={rightArrowBlue}
                alt="Right Icon"
              />
            </div>
          </div>
        </Wrapper>
        <div className={atStart ? "relative  left-5 right-5 md:left-9 md:right-9 xl:left-26" : ""}>
          <div
            className="flex gap-5 md:gap-6 m-auto"
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={windowWidth < 547 ? 1.2 : windowWidth < 936 ? 1.6 : windowWidth < 1440 ? 2.8 : 3}
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
              direction={'horizontal'}
              mousewheel={{
                forceToAxis: true,
                sensitivity: -10,
                thresholdDelta: 14
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

      </div>
    </section >
  );
}
