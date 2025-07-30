import React from 'react'
// import image1 from './assets/ai-qp.png'


const section1 = () => {
  return (
    <div className='w-[100vw] h-[100vh]  '>
        <div className='w-[100vw] h-[20vh]  flex'>
          <div className='w-[70vw] h-[20vh] '>
           <p className='text-6xl font-bold'>Men's clothes</p>
           <p>choice your best outfit</p>
           </div>
           <div className='w-[30vw] h-[20vh] justify-center items-center align-middle flex gap-[10px]'>
           <input className='border ml-[60px]  text-center text-xl' type="text" placeholder='search' />
           <p className=' border-2 text-[18px] bg-black text-white '>Book now</p>
           
           </div>
        </div>
        <div className='w-[100vw] h-[80vh] flex gap-[20px] ml-[60px] shadow-xl/30'>
            <div className='w-[45vw] h-[70vh]  align-middle justify-center items-center bg-[url(https://thehouseofrare.com/cdn/shop/files/ZANZA-GREY-BLAZER04411.jpg?v=1747223633)]  hover:scale-105 transition bg-no-repeat bg-cover '>
            <p className='text-4xl text-white mt-[200px] ml-[50px]' >CREATE YOUR </p>
            <p className='text-6xl text-white ml-[50px]'>INDIVIDUALITY</p>
           
               
            </div>
            <div className='w-[45vw] h-[70vh]  flex flex-col gap-[20px]'>
             <div className='w-[45vw] h-[40vh] bg-[url(https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=170667a&w=is&k=20&c=0jwzo2m57VUOsfXqKmOrqOaXyzOgHhqGuf7OyG7l96Q=)]  hover:scale-105 transition bg-cover '>
             <p className='text-6xl text-white ml-[40px] mt-[20px] '>NEW </p>
             <p className='text-4xl text-white ml-[40px] '>ARRIVALS</p>
             <p className='text-[20px] text-black mt-[60px] ml-[50px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tempore dolorum laudantium quod. </p>

             </div>
             <div className='w-[45vw] h-[40vh]  bg-[url(https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=)]  hover:scale-105 transition '>
             <p className='text-6xl text-white ml-[400px] mt-[20px]'>BIG</p>
             <p className='text-4xl text-white ml-[400px] '>CLEARANGE</p>
             <p className='text-[20px] text-black mt-[60px] ml-[50px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tempore dolorum laudantium quod. </p>

             </div>
            </div>
            
           </div>
        
    </div>
  )
}

export default section1
