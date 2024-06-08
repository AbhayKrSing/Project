import React from 'react'

const Main = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className="relative mb-3 bg-white w-full md:w-[60%] p-2 rounded-t-lg rounded-bl-lg" data-te-input-wrapper-init>
                    <div className='w-full'>
                        <input
                            type="search"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleSearch2"
                            placeholder="Type query"
                        />
                        <label
                            htmlFor="exampleSearch2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary my-1"
                        >Search</label>
                    </div>
                </div>
                <div className='w-full md:w-[20%]'>
                    <h1 className="text-3xl py-4 mx-8 text-lg-20 text-white">TaskMINI</h1>
                </div>
                <div className='w-full md:w-[20%] lg:flex justify-end hidden'>
                    <img src="https://th.bing.com/th/id/OIG.nXz_L5_zrTRxITleEZgn?pid=ImgGn" alt="img" width={'80rem'} className='rounded-full block' />
                </div>
            </div>

        </>
    )
}

export default Main
