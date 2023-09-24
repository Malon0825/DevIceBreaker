import React, {useState, useEffect} from 'react'
import { pp_phus, pp_fritz, pp_ging, pp_hazel, pp_jehan, pp_jen, pp_mark, pp_miya } from '../assets'
import { getFirestore, collection, query, updateDoc, where, getDocs, getDoc, addDoc, onSnapshot } from 'firebase/firestore';
import Guess from './Guess';
import Scores from './Scores';

const Answers = (props) => {
    const db = getFirestore()
    

    const [frits, setFrits] = useState(null)
    const [gayzel, setGayzel] = useState(null)
    const [mark, setMark] = useState(null)
    const [phus, setPhus] = useState(null)

    const [jehan, setJehan] = useState(null)
    const [miya, setMiya] = useState(null)
    const [hazel, setHazel] = useState(null)
    const [jen, setJen] = useState(null)


    const answersColRef = collection(db, 'answers')
    const [doneMark, setDoneMark] = useState(false)
    const [doneFritz, setDoneFritz] = useState(false)
    const [doneGayzel, setDoneGayzel] = useState(false)
    const [donePhus, setDonePhus] = useState(false)
    const [doneJehan, setDoneJehan] = useState(false)
    const [doneMiya, setDoneMiya] = useState(false)
    const [doneHazel, setDoneHazel] = useState(false)
    const [doneJen, setDoneJen] = useState(false)

    const {userId, doneAnswer} = props

    const [playerName, setPlayerName] = useState(null)
    const [finalScreen, setFinalScreen] = useState(false)

    const [toggleScoreScreen, setToggleScoreScreen] = useState(false)

    useEffect(() => {
        if (userId === "EfdDqIYs76nZRZLiRl2V"){
            setToggleScoreScreen(true)        
        }
    },[userId])

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

    useEffect(() => {

        if(frits || gayzel || phus || mark || jehan || miya || hazel || jen){

            if (playerName == "7B0xtSrziItksLppgPp0") {
                setFrits(false)
            } 
            else if (playerName == "1NdJtqbrEJC0JCWveezI"){
                setMiya(false)
            }
            else if (playerName == "EfdDqIYs76nZRZLiRl2V"){
                setMark(false)
            }
            else if (playerName == "abu8beD3CmDBdUWEbLhu"){
                setJen(false)
            }
            else if (playerName == "in3qepEVlTw8UA37j3ig"){
                setJehan(false)
            }
            else if (playerName == "sdn9inyKc1pNqudmMRpt"){
                setPhus(false)
            }
            else if (playerName == "t9zacmbSoIbIAgyfv1I5"){
                setGayzel(false)
            }
            else if (playerName == "zp07Bp2kPEX5BFozHpJT"){
                setHazel(false)
            } 
        }

    
    }, [playerName])



    // Declare a state variable for seconds and initialize it to 0
    const [seconds, setSeconds] = useState(0);

    // Declare a state variable for the timer status and initialize it to false
    const [isActive, setIsActive] = useState(true);


    // Use the useEffect hook to update the timer
    useEffect(() => {
        // Declare a variable for the interval ID
        let interval = null;

        // Check if the timer is active
        if (isActive) {
        // Set an interval to increment the seconds by 1 every 1000 milliseconds
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 2000);
        } else if (!isActive && seconds !== 0) {
        // Clear the interval if the timer is not active and seconds is not 0
        clearInterval(interval);
        }

        // Return a cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [isActive, seconds]); // Pass isActive and seconds as dependencies



    
    useEffect(() => {

        if (doneMark && doneFritz && doneGayzel && donePhus && doneJehan && doneMiya && doneHazel && doneJen) {
            setIsActive(false)
        }else{

            if(!doneMark){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "EfdDqIYs76nZRZLiRl2V"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        setMark(false);
                    } else {
                        console.log("user done");
                        setDoneMark(true)
                        setMark(true);
                    }
                }
                getUserMark()               
            }

            if(!doneFritz){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "7B0xtSrziItksLppgPp0"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("user not done");
                        setFrits(false);
                    } else {
                        console.log("user done");
                        setDoneFritz(true)
                        setFrits(true);
                    }
                }
                getUserMark()    
                if (playerName == "7B0xtSrziItksLppgPp0") {
                    setFrits(false)
                }            
            }

            if(!doneGayzel){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "t9zacmbSoIbIAgyfv1I5"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("gayzel not done");
                        setGayzel(false)
                    } else {
                        console.log("user done");
                        setDoneGayzel(true)
                        setGayzel(true)
                    }
                }
                getUserMark()               
            }

            if(!donePhus){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "sdn9inyKc1pNqudmMRpt"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("user not done");
                        setPhus(false)
                    } else {
                        console.log("user done");
                        setDonePhus(true)
                        setPhus(true)
                    }
                }
                getUserMark()               
            }

            if(!doneJehan){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "in3qepEVlTw8UA37j3ig"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("user not done");
                        setJehan(false)
                    } else {
                        console.log("user done");
                        setDoneJehan(true)
                        setJehan(true)
                    }
                }
                getUserMark()               
            }

            if(!doneMiya){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "1NdJtqbrEJC0JCWveezI"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("user not done");
                        setMiya(false)
                    } else {
                        console.log("user done");
                        setDoneMiya(true)
                        setMiya(true)
                    }
                }
                getUserMark()               
            }

            if(!doneHazel){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "zp07Bp2kPEX5BFozHpJT"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("user not done");
                        setHazel(false)
                    } else {
                        console.log("user done");
                        setDoneHazel(true)
                        setHazel(true)
                    }
                }
                getUserMark()               
            }

            if(!doneJen){
                async function getUserMark(){

                    const finishedAnswer = query(answersColRef, where("user_id", "==", "abu8beD3CmDBdUWEbLhu"));

                    const querySnapshot = await getDocs(finishedAnswer);

                    if (querySnapshot.size === 0) {
                        
                        console.log("user not done");
                        setJen(false)
                    } else {
                        console.log("user done");
                        setDoneJen(true)
                        setJen(true)
                    }
                }
                getUserMark()               
            }

            console.log("count");
     
        }

	}, [seconds]);


    const [toggleGuess, setToggleGuess] = useState(true)
    const [clickedId, setClickedId] = useState("")
    const [guessName, setGuessName] = useState("")
    const [guessCount, setGuessCount] = useState(0)

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

    }, [seconds])


    
    useEffect(() => {
        
        if (guessCount >= 7) {

            async function handleSaveChoiceFirst() { 
                // Create a query that filters documents by user_id
                const q = query(answersColRef, where("user_id", "==", userId));
        
                // Get the documents that match the query
                const querySnapshot = await getDocs(q);
        
                // Loop through each document and update the guess_done field to true
                querySnapshot.forEach((doc) => {
                // Use the doc.ref property to get the document reference
                updateDoc(doc.ref, {
                    guess_done: true,
                });
                });
            }
            handleSaveChoiceFirst()
            setFinalScreen(true)
        }else{
            setFinalScreen(false)
        }
    }, [guessCount])

    useEffect(() => {
        
        async function getUser(){

            const finishedAnswer = query(answersColRef, where("user_id", "==", userId),
                                                        where("guess_done", "==",true));

            const querySnapshot = await getDocs(finishedAnswer);

            if (querySnapshot.size === 0) {
                
                
            } else {
                setFinalScreen(true)
            }
            
        }
        getUser()
    }, [userId])




    

  return (

    <div className="relative bg-primary bg-opacity-75 border-4 border-third w-[1000px] h-[600px] p-10 flex items-center justify-center flex-col gap-10 rounded-xl fade-in">

        <div className={`${finalScreen? 'flex' : 'hidden'} absolute w-[1000px] h-[600px] bg-primary border-4 border-third p-[100px] z-50 rounded-xl flex items-center justify-center flex-col gap-4`}>

            <h1 className={`${toggleScoreScreen? 'hidden' : 'flex'} text-text text-4xl text-center`}>“Thank you for participating in our game! We appreciate your time and effort. We hope you had fun and learned something new from the game. We will announce the winner in the meeting. Have a great day!”
            </h1>

            <div className={`${toggleScoreScreen? 'flex' : 'hidden'} `}>
                <Scores />
            </div>

        </div>

        <div className={`${toggleGuess? "flex card-fade-in" : "hidden"}  w-[1000px] h-[600px] p-10 flex items-center justify-center flex-col gap-10 `}>

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

        </div>

        <div className={`${toggleGuess? "hidden" : "flex"}`}>
            <Guess userId={userId} guessName={guessName} clickedID={clickedId} setToggleGuess={setToggleGuess} setPlayer={setPlayerName} guessCount={setGuessCount} currentCount={guessCount}/> 
        </div>
        
    </div>
  )
}

export default Answers