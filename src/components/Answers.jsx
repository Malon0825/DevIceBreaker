import React, {useState, useEffect} from 'react'
import { pp_phus, pp_fritz, pp_ging, pp_hazel, pp_jehan, pp_jen, pp_mark, pp_miya } from '../assets'

const Answers = (props) => {

    const [frits, setFrits] = useState(true)
    const [gayzel, setGayzel] = useState(true)
    const [mark, setMark] = useState(true)
    const [phus, setPhus] = useState(true)

    const [jehan, setJehan] = useState(true)
    const [miya, setMiya] = useState(true)
    const [hazel, setHazel] = useState(true)
    const [jen, setJen] = useState(true)

    const {userId} = props

    useEffect(() => {
      
        if (userId == "7B0xtSrziItksLppgPp0") {
            setFrits(false)
        } 
        else if (userId == "1NdJtqbrEJC0JCWveezI"){
            setMiya(false)
        }
        else if (userId == "EfdDqIYs76nZRZLiRl2V"){
            setMark(false)
        }
        else if (userId == "abu8beD3CmDBdUWEbLhu"){
            setJen(false)
        }
        else if (userId == "in3qepEVlTw8UA37j3ig"){
            setJehan(false)
        }
        else if (userId == "sdn9inyKc1pNqudmMRpt"){
            setPhus(false)
        }
        else if (userId == "t9zacmbSoIbIAgyfv1I5"){
            setGayzel(false)
        }
        else if (userId == "zp07Bp2kPEX5BFozHpJT"){
            setHazel(false)
        }

    }, [userId])
    

    function handleFritz() {
        alert("click")
    }

  return (

    <div className="bg-primary bg-opacity-75 border-4 border-third w-[1000px] h-[600px] p-10 flex items-center justify-center flex-col gap-10 rounded-xl">

        <h1 className="text-4xl font-semibold text-text">"Do You Really Know Them?"</h1>

        <div className="w-[900px] h-[500px] overflow-y-scroll scrollbar rounded-xl">

            <div className="grid grid-cols-2 grid-rows-4 gap-10">


                <div className={`${frits? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_fritz} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-xl">"Love is the answer to everything. Life is the question."</h1> 
                        <h2>--by sir Fritzy</h2>      
                    </div>
                    
                </div>


                <div className={`${gayzel? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_ging} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-sm">"Love is not a matter of counting the years, but making the years count. Life is not a matter of holding on to the past, but embracing the present."</h1> 
                        <h2>--by ma'am Ging</h2>      
                    </div>
                    
                </div>


                <div className={`${mark? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_mark} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-xl">"Love is not finding someone to live with. It is finding someone you can't live without."</h1> 
                        <h2>--by sir Mark</h2>      
                    </div>
                    
                </div>


                <div className={`${phus? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_phus} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-md">"Life without love is like a tree without blossoms or fruit. Love without life is like a flower without fragrance or color."</h1> 
                        <h2>--by sir Phus</h2>      
                    </div>
                    
                </div>


                <div className={`${jehan? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_jehan} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-md">"Life is what happens when your busy making other plans. Love is what makes those plans worth pursuing."</h1> 
                        <h2>--by ma'am Jehan</h2>      
                    </div>
                    
                </div>


                <div className={`${miya? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_miya} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-xl">"Love is not a feeling, it is a choice. Life is not a chance, it is a challenge."</h1> 
                        <h2>--by ma'am Miya</h2>      
                    </div>
                    
                </div>


                <div className={`${hazel? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_hazel} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-md">"The most important thing in life is to love and be loved. The most beautiful thing in life is to see and be seen."</h1> 
                        <h2>--by ma'am Hazel</h2>      
                    </div>
                    
                </div>


                <div className={`${jen? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleFritz}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_jen} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-xl">"Life is a journey, not a destination. Love is the fuel, not the vehicle."</h1> 
                        <h2>--by ma'am Jen</h2>      
                    </div>
                    
                </div>


                
            </div>
        </div>



        
    </div>
  )
}

export default Answers