import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

function Colors({hex,weight,textColor}) {

  const copy =()=>{
    navigator.clipboard.writeText(`#${hex}`)
    toast('Copied TO clipboard',{
      position:'top-center',
      theme:'light',
      type:'success'
    })
  }
  return (
    <article className={`h-[95px] hover:cursor-pointer`} style={{backgroundColor:`#${hex}`,color:`${textColor}`}} onClick={copy} >
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <span>{weight}%</span>
        <span>#{hex}</span>
      </div>
    </article>
  )
}

export default Colors
