import React from "react";
import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import rightArrowBlue from "/public/assets/icons/blue-right-arrow.svg";
import leftArrow from "/public/assets/icons/gray-left-arrow.svg";
import leftArrowBlue from "/public/assets/icons/blue-left-arrow.svg";
export default function BlogHeader({ previousSlide, nextSlide, atStart }) {
  return (
    <Wrapper>
      <div className="flex gap-4.25 mb-5 md:mb-8">
        <h3>Blog</h3>
        <div className="flex gap-2.16">
          <Image
            className="cursor-pointer swiper-button-next"
            src={atStart === true ? leftArrow : leftArrowBlue}
            onClick={previousSlide}
            alt="left Icon"
          />
          <Image
            className="cursor-pointer"
            onClick={nextSlide}
            src={rightArrowBlue}
            alt="Right Icon"
          />
        </div>
      </div>
    </Wrapper>
  );
}
