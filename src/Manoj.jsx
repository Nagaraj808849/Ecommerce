import React, { useRef,useState } from 'react'

const Manoj = () => {
  const ele = useRef(null)
  let [evenVal,setVal] = useState(0)
  let [oddVal,setVal2] = useState("")
  let [trueVal,setVal3] = useState("")
  
  
    return (
    <>
      <div id="body" className="classname w-full h-screen">
        <div id="textBox" className="w-full h-[20vh] flex justify-center gap-[2%] items-center">
            <input type="text" ref={ele}  placeholder='Enter the string' className='h-[10vh] w-[40vw] border-4 text-center text-2xl font-bold' />
            <button  className='  rounded-2xl h-[10vh] w-[12vw] font-bold text-[1.3rem] cursor-pointer '
              onClick={()=>{
                setVal(evenVal=(ele.current.value))
                if(evenVal % 2 == 0){
                    setVal3(trueVal = "TRUE")
                   console.log("True")
                   setVal2(oddVal = "False")
                }
                else{
                  setVal2(oddVal = "True")
                  console.log("True")
                  setVal3(trueVal = "False")
                }
              }}
            >Go
            </button>

        </div>
        
        <div id="buttons" className='w-full h-[80vh]  flex justify-center'>
            
           
          <div className='h-[30%] w-[50%] '>
              <div className='w-full h-[50%] border-1 flex'>
                <div className='w-[50%] h-full flex justify-center items-center text-2xl font-bold text-white'>EVEN NUMBER</div>
                <div className='w-[50%] h-full flex justify-center items-center text-2xl font-bold text-white'>ODD NUMBER</div>
              </div>
              <div className='w-full h-[50%] border-1 flex'>
                <div className='w-[50%] h-full flex justify-center items-center text-2xl font-bold text-white'>{trueVal}</div>
                <div className='w-[50%] h-full flex justify-center items-center text-2xl font-bold text-white'>{oddVal}</div>
              </div>
          </div>

            
        </div>

      </div>
    </>
  )
}

export default Manoj