import React from 'react'

const section3 = () => {
      let myleast=[
        {
            "images":"https://media.gettyimages.com/id/513866805/photo/portrait-of-man.jpg?s=612x612&w=gi&k=20&c=JYvUIJ-AKfxjR7SlelTfcrKI6_BaZgXwUzWJeKyX9kM=",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$13000"


        },
         {
            "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5SeXhl36E9-q9L8vdzpKbGGOZgTG8V7s5A&s",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$12000"


        },
         {
            "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CrlnLqzEn0wmJaKR_rNtX2WOIuTPVZUH8Q&s",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$115000"


        },
         {
            "images":"https://images.peopleimages.com/picture/202307/2714349-face-senior-ceo-and-man-with-arms-crossed-outdoor-for-business-entrepreneurship-and-professional-with-smile.-portrait-confident-and-mature-manager-accountant-or-executive-with-glasses-on-bokeh-fit_400_400.jpg",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$145000"


        }
    ]
  return (
   
    <div className='w-[100vw] h-[100vh] flex flex-row gap-[5px]'>
    {
    myleast.map(e =>
        <div className='flex flex-col hover:scale-105 transition'> 
          <div className='w-[20vw] h-[60vh] mt-[80px]   flex  ml-[50px] ' style={{
                backgroundImage: `url(${e.images})`,
                backgroundSize: 'cover'}}>
          
           </div>
    
         <div className='w-[20vw] h-[20vh] flex flex-col ml-[50px]'>
      
            <p className='text-[17px] text-black italic ml-[20px]'>{e.title1}</p>
            <p className='text-[17px] text-black italic ml-[50px]'>{e.title2} </p>
            <p className='text-[20px] text-center mr-[30px]'>${e.price}</p>
            <p className='text-center text-white bg-black border-2 w-[10vw] ml-[60px] mt-[20px]'>Book Now</p>
        </div>
        </div>
    )
}
    
    
    
 
   </div>
)

}
    
  


export default section3
