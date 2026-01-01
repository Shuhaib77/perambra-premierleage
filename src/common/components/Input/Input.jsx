import React from 'react'

function Input({palceholder,label}) {
    const basicStyle='border border-gray p-3 w-full  rounded-xl'
  return (

    <div className='w-full'>
        <label htmlFor="">{label}</label>
        <input className={`${basicStyle}`} placeholder={palceholder}></input>
    </div>
  )
}

export default Input