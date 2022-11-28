import React from 'react'
import Tag from './Tag'

export default function BlogCard({date, title, subtitle,tags}) {

  return (
    <div className='min-w-sm md:min-w-md xl:min-w-lg box-border p-5 flex flex-col rounded-sm border-0.25 border-solid border-grey-400 shadow-md gap-9.5 justify-between'>
      <div className='flex flex-col gap-6'>

          <h3>{date}</h3>
          <div className='flex flex-col gap-y-3  items-start'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
      </div>
       
      <div className='flex flex-wrap gap-x-6 gap-y-2 items-center'>
        {tags.map(el=><Tag key={el.id} fill>{el.name}</Tag>)}
       
      

      </div>

    </div>
  )
}
