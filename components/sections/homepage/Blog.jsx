import Image from "next/image";
import Wrapper from "../../layout/Wrapper";
import rightArrow from "/public/assets/icons/blue-right-arrow.svg";
import leftArrow from "/public/assets/icons/gray-left-arrow.svg";
import data from '../../../data/blogCard'
import BlogCard from "../../ui/BlogCard";
export default function Blog() { 
  return (
    <section className="mt-27.79 mb-31.75 overflow-hidden">
      <Wrapper>
        <div className="flex gap-4.25 mb-5 md:mb-8">
          <h3>Blog</h3>
          <div className="flex gap-2.16">
            <Image src={leftArrow} alt="" />
            <Image src={rightArrow} alt="" />
          </div>
        </div>
        <div className="flex gap-5 md:gap-6">
          {data.map(el => <BlogCard key={el.id} date={el.date} title={el.title} subtitle={el.subtitle} tags={el.tag} />)}

        </div>
      </Wrapper>
    </section>
  );
}
