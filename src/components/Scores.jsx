import React, {useState, useEffect} from 'react'
import { pp_phus, pp_fritz, pp_ging, pp_hazel, pp_jehan, pp_jen, pp_mark, pp_miya } from '../assets'
import { getFirestore, collection, query, updateDoc, where, getDocs, getDoc, addDoc, onSnapshot } from 'firebase/firestore';
import Tally from './Tally';

const Scores = (props) => {
    const db = getFirestore()

    const [frits, setFrits] = useState(true)
    const [gayzel, setGayzel] = useState(true)
    const [mark, setMark] = useState(true)
    const [phus, setPhus] = useState(true)

    const [jehan, setJehan] = useState(true)
    const [miya, setMiya] = useState(true)
    const [hazel, setHazel] = useState(true)
    const [jen, setJen] = useState(true)

    
    const [toggleGuess, setToggleGuess] = useState(true)
    const [clickedId, setClickedId] = useState("")
    const [guessName, setGuessName] = useState("")

    function handleFritz() {
        setClickedId("7B0xtSrziItksLppgPp0")
        setGuessName("Sir Fritz")
        setToggleGuess(false)
    }

    function handleGayzel() {
        setClickedId("t9zacmbSoIbIAgyfv1I5")
        setGuessName("Ma'am Gayzel")
        setToggleGuess(false)
    }

    function handlePhus() {
        setClickedId("sdn9inyKc1pNqudmMRpt")
        setGuessName("Sir Phus")
        setToggleGuess(false)
    }

    function handleJehan() {
        setClickedId("in3qepEVlTw8UA37j3ig")
        setGuessName("Ma'am Jehan")
        setToggleGuess(false)
    }

    function handleMiya() {
        setClickedId("1NdJtqbrEJC0JCWveezI")
        setGuessName("Ma'am Miya")
        setToggleGuess(false)
    }

    function handleHazel() {
        setClickedId("zp07Bp2kPEX5BFozHpJT")
        setGuessName("Ma'am Hazel")
        setToggleGuess(false)
    }

    function handleJen() {
        setClickedId("abu8beD3CmDBdUWEbLhu")
        setGuessName("Ma'am Jen")
        setToggleGuess(false)
    }

    function handleMark() {
        setClickedId("EfdDqIYs76nZRZLiRl2V")
        setGuessName("Sir Mark")
        setToggleGuess(false)
    }



    const answersColRef = collection(db, 'answers')
    const [guessSelectedData, setGuessSelectedData] = useState(null)
    
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [choiceThree, setChoiceThree] = useState(null)

    useEffect(() => {

        async function getSelectedData(){

            const finishedAnswer = query(answersColRef, where("user_id", "==", clickedId));

            onSnapshot(finishedAnswer, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setGuessSelectedData(answers)
                });
        }
        getSelectedData()
    }, [clickedId])

    useEffect(() => {

        {guessSelectedData?.map(data => (
            setChoiceOne(data.lie_value)
        ))}  
        
        {guessSelectedData?.map(data => (
            setChoiceTwo(data.truth_one)
        ))}  

        {guessSelectedData?.map(data => (
            setChoiceThree(data.truth_two)
        ))}  
        
    }, [guessSelectedData])


    const [setshowTally, setSetshowTally] = useState(true)
    

  return (

    <div className="relative w-[1000px] h-[600px] bg-primary rounded-xl flex items-center justify-center flex-col">

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


                <div className={`${gayzel? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleGayzel}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_ging} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-sm">"Love is not a matter of counting the years, but making the years count. Life is not a matter of holding on to the past, but embracing the present."</h1> 
                        <h2>--by ma'am Ging</h2>      
                    </div>
                    
                </div>


                <div className={`${mark? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleMark}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_mark} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-xl">"Love is not finding someone to live with. It is finding someone you can't live without."</h1> 
                        <h2>--by sir Mark</h2>      
                    </div>
                    
                </div>


                <div className={`${phus? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handlePhus}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_phus} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-md">"Life without love is like a tree without blossoms or fruit. Love without life is like a flower without fragrance or color."</h1> 
                        <h2>--by sir Phus</h2>      
                    </div>
                    
                </div>


                <div className={`${jehan? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleJehan}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_jehan} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-md">"Life is what happens when your busy making other plans. Love is what makes those plans worth pursuing."</h1> 
                        <h2>--by ma'am Jehan</h2>      
                    </div>
                    
                </div>


                <div className={`${miya? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleMiya}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_miya} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-xl">"Love is not a feeling, it is a choice. Life is not a chance, it is a challenge."</h1> 
                        <h2>--by ma'am Miya</h2>      
                    </div>
                    
                </div>


                <div className={`${hazel? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleHazel}>
                    <div className="w-[200px] h-[200px] bg-neutral-500 rounded-xl overflow-hidden">
                        <img className=" scale-125 hover:scale-150 transition-all duration-500 ease-in-out" src={pp_hazel} alt="photo"/>        
                    </div>
                    <div className="w-[200px] h-[200px] flex items-center justify-center flex-col">
                        <h1 className="text-text text-md">"The most important thing in life is to love and be loved. The most beautiful thing in life is to see and be seen."</h1> 
                        <h2>--by ma'am Hazel</h2>      
                    </div>
                    
                </div>


                <div className={`${jen? 'flex' : 'hidden'} user-card flex gap-2 cursor-pointer`} onClick={handleJen}>
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

        <button className="px-4 py-2 text-text border-2 border-third rounded-xl text-2xl mt-4" onClick={() => setSetshowTally(true)}>View Winner</button>

        <div className={`${toggleGuess? 'hidden' : 'flex'} absolute w-[1000px] h-[600px] bg-primary rounded-xl bg-opacity-90 flex flex-col items-center justify-center z-40`}>

            <h1 className="text-3xl font-semibold text-text">{guessName}</h1>

            <div className="flex flex-col justify-center h-[400px] w-[800px]">

                <label htmlFor="names" className="text-2xl text-text">Truth #1:</label>

                <div className="flex gap-2">

                    <label className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4">
                        {choiceTwo}
                    </label>


                </div>


                <label htmlFor="truthTwo" className="text-2xl text-text mt-4">Truth #2:</label>
                <div className="flex gap-2">

                    <label className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4">
                        {choiceThree}
                    </label>


                </div>



                <label htmlFor="passs" className="text-2xl text-text mt-10">{guessName} Lie In September:</label>
                <div className="flex gap-2">

                    <label className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4">
                        {choiceOne}
                    </label>


                </div>

            </div>

            <button className="px-4 py-2 text-text border-2 border-third rounded-xl text-2xl" onClick={() => setToggleGuess(true)}>Go Back</button>


        </div>

        <div className={`${setshowTally? 'flex' : 'hidden'} absolute z-50`}>
            <Tally showTally={setSetshowTally} startCompute={true}/>
        </div>

        
        
    </div>
  )
}

export default Scores