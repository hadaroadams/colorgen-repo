import React from 'react'

function Colors({hex,weight,textColor}) {
  return (
    <article className={`h-[95px]`} style={{backgroundColor:`#${hex}`,color:`${textColor}`}} >
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <span>{weight}%</span>
        <span>#{hex}</span>
      </div>
    </article>
  )
}

export default Colors
