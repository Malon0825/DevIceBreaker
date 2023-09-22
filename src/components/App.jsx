import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {bg, merry, key, scroll} from "../assets"
import { getFirestore, collection, query, updateDoc, where, getDocs, getDoc, addDoc, onSnapshot } from 'firebase/firestore';


const App = (props) => {
    
    const db = getFirestore()
    const userColRef = collection(db, 'users')
    let navigate = useNavigate();

	const [toggleScroll, setToggleScroll] = useState(false)

    const [userId, setUserId] = useState(null)
    const username = useRef(null)
    const userpass = useRef(null)

    async function handleUserLogin(){

        const currentUserQuery = query(userColRef, where("username", "==", username.current.value), 
                                                    where("password", "==", userpass.current.value));

        const querySnapshot = await getDocs(currentUserQuery);

        if (querySnapshot.size === 0) {
            
            alert("Invalid username or password");
        } else {
        querySnapshot.forEach((doc) => {
            setUserId(doc.id, " => ", doc.data());
        });
        }

    }

    const { toggleUser, currentUserId } = props;

    useEffect(() => {

        if (userId != null) {
            
            currentUserId(userId)
            toggleUser(false)
        }

    }, [userId])
    



    return (
		<div className="relative h-screen w-screen flex items-center justify-center font-poppins overflow-hidden">

			<div className="w-full h-full absolute overflow-hidden">
				<img src={bg} alt="" />				
			</div>

			<div className={`${toggleScroll? "hidden" : "flex"} absolute bottom-[50px] left-[50px] w-[120px] h-[120px] opacity-60`}>
					<img className="" src={key} alt="" onClick={() => setToggleScroll(true)}/>					
			</div>
				
			<div className={`${toggleScroll? "flex" : "hidden"} absolute w-[300px] z-20 h-[300px] top-10 right-52 roll-animation items-center justify-center`}>
				<img className="" src={scroll} alt="" />
				<h1 className="absolute text-2xl">twotruthandalie</h1>	
			</div>

            <div className="absolute -top-[40px] left-[150px] w-[320px] h-[320px] z-20 ">
					<img className="animation-shining" src={merry} alt="" />					
			</div>


			<div className="relative bg-primary h-[500px] w-[700px] rounded-xl card-opacity flex items-center justify-center flex-col gap-10 card">


                <h1 className="text-4xl font-semibold text-text">LOGIN</h1>

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-2xl text-text">Who are you?</label>
                    <input className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4" type="text" id="name" 
                            ref={username}/>

                    <label htmlFor="pass" className="text-2xl text-text mt-10">What's the key?</label>
                    <input className=" bg-transparent border-2 border-secondary rounded-lg text-text text-2xl p-4" type="text" id="pass"
                            ref={userpass} 
                            onKeyDown={event => {
                                if (event.key === 'Enter') 
                                {
                                    handleUserLogin()
                                    console.log("Enter")
                                }
                            }}/>
                </div>

                <button className="Btn text-2xl" onClick={handleUserLogin} >
                    Proceed
                </button>
				
				
			</div>



		
            
		</div>
	)
}

export default App