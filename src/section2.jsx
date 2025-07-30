import React from 'react'
import img1 from './assets/images.jfif'

const section2 = () => {
    let myleast=[
        {
            "images":"https://media.gettyimages.com/id/1462842122/photo/masculine-looking-beautiful-woman-in-a-leather-suit-is-jumping-in-front-of-a-brown-background.jpg?s=612x612&w=gi&k=20&c=WFzTfk6ucQioS77i58jaCiPoHI82tBpPPlLQGjRxCJo=",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$12000"


        },
         {
            "images":"https://img.freepik.com/premium-photo/business-man-portrait-serious-studio-company-contemplating-confidence-ideas-male-professional-lawyer-face-by-white-background-thinking-pride-career-future_590464-265076.jpg?semt=ais_hybrid&w=740&q=80",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$5000"


        },
         {
            "images":"https://c8.alamy.com/comp/JBXKY7/full-length-portrait-of-asian-business-woman-wear-pant-suit-isolated-JBXKY7.jpg",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$85000"


        },
         {
            "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrs5WRzBvNUKCMmOdSaD7DrjfHHMiGvZwJ7w&s",
            "title1":"special suits and couts ghgg gffh  m",
            "title2":"Woman Business Suit",
            "price":"$6000"


        }
    ]
  return (
   <div className='w-[100vw] h-[100vh] flex flex-row gap-[5px]'>
    {
    myleast.map(e =>
        <div className=' grid  grid-cols-1 sm:grid-cols-4  hover:scale-105 transition'> 
          <div className='w-[20vw] h-[60vh] mt-[80px]   flex  ml-[50px] '   style={{
            width: "300px",
            height: "600px",
            backgroundImage: `url(${e.images})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}>
          
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

export default section2
