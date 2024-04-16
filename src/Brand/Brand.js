import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import Brandlist from "./Brandlist"

const Brand = () => {
  return (
    <div className='my-36'>
        <div>
            <h1 className='text-2xl font-bold'>Brand We <span className='text-sky-400'>Trust <FontAwesomeIcon icon={faLessThan}  />  <FontAwesomeIcon icon={faGreaterThan} /> </span> </h1>
        </div>
        <div className='flex flex-col w-48 aspect-[3/2] justify-between object-contain mix-blend-screen bg-neutral-200 brand sm:flex-wrap sm:flex  sm:w-20  '>
            {
                Brandlist.map((list)=>{
                    return(
                        <img src={list.img}></img>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Brand