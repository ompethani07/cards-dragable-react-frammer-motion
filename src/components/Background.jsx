import React from 'react'
const Background = () => {
    return (
        <>
            <div className='w-full h-screen fixed z-[2]'>
                <div className='w-full py-10 absolute top-[5%] flex justify-center text-zinc-300 font-semibold text-xl'>
                    documents.
                </div>
                <h1 className='font-semibold text-zinc-400 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[13vw] leading-none tracking-tighter absolute'>
                    Docs.
                </h1>
            </div>
        </>
    )
}

export default Background
