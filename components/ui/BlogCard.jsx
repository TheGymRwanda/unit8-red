import React from "react";
import Tag from "./Tag";

export default function BlogCard({ date, title, subtitle, tags }) {
  return (
    <div className="h-100.47 relative">
      <div className="flex flex-col gap-6">
        <h3>{date}</h3>
        <div className="flex flex-col gap-y-3 items-start">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="flex absolute bottom-0 flex-wrap gap-x-6 gap-y-2 items-center">
        {tags.map((el) => (
          <Tag key={el.id} fill>
            {el.name}
          </Tag>
        ))}
      </div>
    </div>
  );
}
