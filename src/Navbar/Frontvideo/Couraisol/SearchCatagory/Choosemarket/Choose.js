import React from 'react'
import Chooselist from './Chooselist'
const Choose = () => {
  return (
    <div className='  '>
        <div className='flex flex-row justify-between  gap-9 my-20 w-full   max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:w-96 '>
            {
                Chooselist.map((list)=>{
                    return(
                        <>
                        <div className='   w-full h-96  shadow-2xl py-5   '>
                            <div className='flex flex-col '>
                            <img className = ""src={list.img}></img>
                            <h1 className='py-3'>{list.title}</h1>
                            <p className=''>{list.body}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Choose