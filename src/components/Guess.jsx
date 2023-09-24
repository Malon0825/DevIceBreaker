import React, {useState, useEffect} from 'react'
import { getFirestore, collection, query, updateDoc, where, getDocs, getDoc, addDoc, onSnapshot } from 'firebase/firestore';


const Guess = (props) => {
    const db = getFirestore()

    const {userId, guessName, setToggleGuess, clickedID, setPlayer, guessCount, currentCount} = props
    const answersColRef = collection(db, 'answers')
    const predictColRef = collection(db, 'predictions')

    const [guessSelectedData, setGuessSelectedData] = useState(null)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [choiceThree, setChoiceThree] = useState(null)
    const [randomNumber, setRandomNumber] = useState(null)

    useEffect(() => {

        async function getSelectedData(){
            console.log("async");

            const finishedAnswer = query(answersColRef, where("user_id", "==", clickedID));

            onSnapshot(finishedAnswer, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setGuessSelectedData(answers)
                });
                console.log("user found");
        }
        getSelectedData()
    }, [clickedID])

    useEffect(() => {

        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if(randomNumber == 1){
            {guessSelectedData?.map(data => (
                setChoiceOne(data.lie_value)
            ))}  
            
            {guessSelectedData?.map(data => (
                setChoiceTwo(data.truth_one)
            ))}  

            {guessSelectedData?.map(data => (
                setChoiceThree(data.truth_two)
            ))}  
        }else if(randomNumber == 2){
            {guessSelectedData?.map(data => (
                setChoiceTwo(data.lie_value)
            ))}  
            
            {guessSelectedData?.map(data => (
                setChoiceThree(data.truth_one)
            ))}  

            {guessSelectedData?.map(data => (
                setChoiceOne(data.truth_two)
            ))}
        }else{
            {guessSelectedData?.map(data => (
                setChoiceThree(data.lie_value)
            ))}  
            
            {guessSelectedData?.map(data => (
                setChoiceOne(data.truth_one)
            ))}  

            {guessSelectedData?.map(data => (
                setChoiceTwo(data.truth_two)
            ))}
        }

        
    }, [guessSelectedData])
    
    const [isLoading, setIsLoading] = useState(false)
      
    async function handleSaveChoiceFirst() { 
        setIsLoading(true)
        try {
            await addDoc(predictColRef, {
                user_id: userId,
                clicked_answer: choiceOne,
                clicked_userId: clickedID
            });
        } catch (err) {
            alert(err)
        }
        setToggleDone(true)
        setIsLoading(false)
    }

    async function handleSaveChoiceSecond() { 
        setIsLoading(true)
        try {
            await addDoc(predictColRef, {
                user_id: userId,
                clicked_answer: choiceTwo,
                clicked_userId: clickedID
            });
        } catch (err) {
            alert(err)
        }
        setToggleDone(true)
        setIsLoading(false)
    }

    async function handleSaveChoiceThird() { 
        setIsLoading(true)
        try {
            await addDoc(predictColRef, {
                user_id: userId,
                clicked_answer: choiceThree,
                clicked_userId: clickedID
            });
        } catch (err) {
            alert(err)
        }
        setToggleDone(true)
        setIsLoading(false)
    }


    const [toggleDone, setToggleDone] = useState(false)
    function handleToggleFinish() {

        setPlayer(clickedID)
        setToggleGuess(true)
        setToggleDone(false)
        
        const count = currentCount
        const countValue = count + 1
        guessCount(countValue)
    }

    return (
        <div className="relative w-[1000px] h-[600px] flex rounded-xl p-10 items-center justify-center flex-col gap-10">

            <div className={`${toggleDone? 'flex' : 'hidden'} absolute w-[1000px] h-[600px] rounded-xl bg-primary z-40 flex items-center justify-center p-10 flex-col gap-10`}>
                <h1 className="text-text text-5xl font-semibold">Your answer has been recorded!!</h1>
                <button className="border-2 px-6 py-4 rounded-xl border-third text-text text-2xl" onClick={handleToggleFinish}>Continue...</button>
            </div>

            <button className="border-2 rounded-full px-4 py-2 text-4xl absolute top-[20px] right-[20px] font-semibold text-text hover:text-5xl transition-all duration-300 ease-in-out" onClick={() => setToggleGuess(true)}>X</button>
            <h1 className="text-4xl font-semibold text-secondary">{guessName}</h1>

            <div className="w-[800px] h-[500px] flex flex-col overflow-y-auto scrollbar gap-4">
     
                <div className="text-3xl text-text">
                    <label className="text-secondary">Statement A: </label>

                    <div className="border-2 border-third rounded-xl p-4">
                        <label>"{choiceOne}"</label>
                    </div>
                    
                </div>

                <div className="text-3xl text-text">
                    <label className="text-secondary">Statement B: </label>

                    <div className="border-2 border-third rounded-xl p-4">
                        <label className=" ">"{choiceTwo}"</label>
                    </div>
                    
                </div>

                <div className="text-3xl text-text">
                    <label className="text-secondary">Statement C: </label>

                    <div className="border-2 border-third rounded-xl p-4">
                        <label className=" ">"{choiceThree}"</label>
                    </div>
                    
                </div>
            </div>


            <div className="h-[100px] w-[800px] flex items-center justify-center gap-4 text-text">
                <button className="border-2 border-third px-4 py-2 rounded-xl text-2xl" onClick={handleSaveChoiceFirst} disabled={isLoading}>Statement A</button>
                
                <button className="border-2 border-third px-4 py-2 rounded-xl text-2xl" onClick={handleSaveChoiceSecond} disabled={isLoading}>Statement B</button>

                <button className="border-2 border-third px-4 py-2 rounded-xl text-2xl" onClick={handleSaveChoiceThird} disabled={isLoading}>Statement C</button>
                
            </div>


            
        </div>
    )
}

export default Guess