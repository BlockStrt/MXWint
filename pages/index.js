import React from 'react'
import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <div className=' flex min-h-screen justify-center items-center bg-black text-white '>
      <Head>
        <title>Maxine Wint</title>
        <meta name="description" content="Maxine Wint" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <nav className=' w-full h-24 fixed top-0 flex justify-between p-5 1xl md:text-3xl lg:text-5xl'>
        <div>Your Name.</div>
        <div>Contact Logo</div>
      </nav>

      <main className='mx auto h-full w-full gap-28 md:gap-0 lg:gap-0 grid md:flex lg:flex justify-center md:justify-between lg:justify-between '>
            <div className='w-2/4'>Content here</div>
            <div className='w-2/4 text-center'> content here</div>
      </main>

      <footer className="mx-auto md:mx-0 lg:mx-4 fixed  w-full grid bottom-12 md:bottom-0 lg:bottom-0 md:flex lg:flex gap-10 text-2xl md:text-3xl lg:text-5xl ">
       <div>
        About
       </div>
       <div>
        Buy
       </div>
       <div>
        Contact
       </div>
      </footer>
    </div>
  )
}
