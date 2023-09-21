import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {bg_blur, merry, key, scroll} from "../assets"
import { getFirestore, collection, query, updateDoc, where, getDocs, getDoc, doc, onSnapshot } from 'firebase/firestore';

const Home = () => {
    
    const truthOne = useRef(null)
    const truthTwo = useRef(null)
    const lie = useRef(null)

    const [userId, setUserId] = useState("")


    const [toggleTextVisibilityLieOne, setToggleTextVisibilityLieOne] = useState("Hide")
    const [toggleTextTypeLieOne, setToggleTextTypeLieOne] = useState("text")

    function handleTextVisibilityLieOne(){

        if(toggleTextTypeLieOne == "text"){
            setToggleTextVisibilityLieOne("Show")
            setToggleTextTypeLieOne("password")            
        }else{
            setToggleTextVisibilityLieOne("Hide")
            setToggleTextTypeLieOne("text")    
        }

    }


    const [toggleTextVisibilityLieTwo, setToggleTextVisibilityLieTwo] = useState("Hide")
    const [toggleTextTypeLieTwo, setToggleTextTypeLieTwo] = useState("text")

    function handleTextVisibilityLieTwo(){

        if(toggleTextTypeLieTwo == "text"){
            setToggleTextVisibilityLieTwo("Show")
            setToggleTextTypeLieTwo("password")            
        }else{
            setToggleTextVisibilityLieTwo("Hide")
            setToggleTextTypeLieTwo("text")    
        }

    }


    const [toggleTextVisibilityTruth, setToggleTextVisibilityTruth] = useState("Hide")
    const [toggleTextTypeTruth, setToggleTextTypeTruth] = useState("text")

    function handleTextVisibilityTruth(){

        if(toggleTextTypeTruth == "text"){
            setToggleTextVisibilityTruth("Show")
            setToggleTextTypeTruth("password")            
        }else{
            setToggleTextVisibilityTruth("Hide")
            setToggleTextTypeTruth("text")    
        }

    }


    return (
        <div className="relative h-screen w-screen flex items-center justify-center font-poppins overflow-hidden">

			<div className="w-full h-full absolute overflow-hidden">
				<img src={bg_blur} className="bg-opacity-75" />				
			</div>

            <div className="relative bg-primary h-[600px] w-[700px] rounded-xl card-opacity flex items-center justify-center flex-col gap-10 bg-opacity-80 border-2 border-secondary">

                <h1 className="text-4xl text-text font-semibold">"Two Truths And A Lie"</h1>

                <div className="flex flex-col">

                    <label htmlFor="name" className="text-2xl text-text">Truth #1:</label>

                    <div className="flex gap-2">

                        <input className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4" type={toggleTextTypeLieOne} id="name" 
                            ref={truthOne}/>

                        <button className="border-2 p-2 rounded-lg border-secondary text-text" onClick={handleTextVisibilityLieOne}>{toggleTextVisibilityLieOne}</button>

                    </div>


                    <label htmlFor="truthTwo" className="text-2xl text-text mt-4">Truth #2:</label>
                    <div className="flex gap-2">

                        <input className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4" type={toggleTextTypeLieTwo} id="truthTwo" 
                            ref={truthTwo}/>

                        <button className="border-2 p-2 rounded-lg border-secondary text-text" onClick={handleTextVisibilityLieTwo}>{toggleTextVisibilityLieTwo}</button>

                    </div>


                    
                    <label htmlFor="pass" className="text-2xl text-text mt-10">Your lie in september:</label>
                    <div className="flex gap-2">

                        <input className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4" type={toggleTextTypeTruth} id="truthTwo" 
                            ref={lie}/>

                        <button className="border-2 p-2 rounded-lg border-secondary text-text" onClick={handleTextVisibilityTruth}>{toggleTextVisibilityTruth}</button>

                    </div>
                </div>

				
				
			</div>


		</div>
	)
}

export default Home