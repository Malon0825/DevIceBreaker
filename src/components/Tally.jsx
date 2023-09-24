import React, {useState, useEffect} from 'react'
import { pp_phus, pp_fritz, pp_ging, pp_hazel, pp_jehan, pp_jen, pp_mark, pp_miya } from '../assets'
import { getFirestore, collection, query, updateDoc, where, getDocs, getDoc, addDoc, onSnapshot } from 'firebase/firestore';

const Tally = (props) => {

    const {showTally, startCompute} = props
    
    const db = getFirestore()
    const answersColRef = collection(db, 'answers')
    const predictColRef = collection(db, 'predictions')

    const [frits, setFrits] = useState(null)
    const [gayzel, setGayzel] = useState(null)
    const [mark, setMark] = useState(null)
    const [phus, setPhus] = useState(null)

    const [jehan, setJehan] = useState(null)
    const [miya, setMiya] = useState(null)
    const [hazel, setHazel] = useState(null)
    const [jen, setJen] = useState(null)

    const [fritsScores, setFritsScores] = useState(0)
    const [gayzelScores, setGayzelScores] = useState(0)
    const [markScores, setMarkScores] = useState(0)
    const [phusScores, setPhusScores] = useState(0)

    const [jehanScores, setJehanScores] = useState(0)
    const [miyaScores, setMiyaScores] = useState(0)
    const [hazelScores, setHazelScores] = useState(0)
    const [jenScores, setJenScores] = useState(0)

    const [fritsLie, setFritsLie] = useState(null)
    const [gayzelLie, setGayzelLie] = useState(null)
    const [markLie, setMarkLie] = useState(null)
    const [phusLie, setPhusLie] = useState(null)

    const [jehanLie, setJehanLie] = useState(null)
    const [miyaLie, setMiyaLie] = useState(null)
    const [hazelLie, setHazelLie] = useState(null)
    const [jenLie, setJenLie] = useState(null)


    const [fritsPredictions, setFritsPredictions] = useState(null)
    const [gayzelPredictions, setGayzelPredictions] = useState(null)
    const [markPredictions, setMarkPredictions] = useState(null)
    const [phusPredictions, setPhusPredictions] = useState(null)

    const [jehanPredictions, setJehanPredictions] = useState(null)
    const [miyaPredictions, setMiyaPredictions] = useState(null)
    const [hazelPredictions, setHazelPredictions] = useState(null)
    const [jenPredictions, setJenPredictions] = useState(null)


    const [fritsPredictionsValue, setFritsPredictionsValue] = useState(null)
    const [gayzelPredictionsValue, setGayzelPredictionsValue] = useState(null)
    const [markPredictionsValue, setMarkPredictionsValue] = useState(null)
    const [phusPredictionsValue, setPhusPredictionsValue] = useState(null)

    const [jehanPredictionsValue, setJehanPredictionsValue] = useState(null)
    const [miyaPredictionsValue, setMiyaPredictionsValue] = useState(null)
    const [hazelPredictionsValue, setHazelPredictionsValue] = useState(null)
    const [jenPredictionsValue, setJenPredictionsValue] = useState(null)
    
    const [computeScores, setComputeScores] = useState(false)
    
    useEffect(() => {
        async function getFritzData(){

            const answerData = query(answersColRef, where("user_id", "==", "7B0xtSrziItksLppgPp0"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setFrits(answers)
                });
        }
        getFritzData()

        async function getGayzelData(){

            const answerData = query(answersColRef, where("user_id", "==", "t9zacmbSoIbIAgyfv1I5"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setGayzel(answers)
                });
        }
        getGayzelData()

        async function getPhusData(){

            const answerData = query(answersColRef, where("user_id", "==", "sdn9inyKc1pNqudmMRpt"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setPhus(answers)
                });
        }
        getPhusData()

        async function getMarkData(){

            const answerData = query(answersColRef, where("user_id", "==", "EfdDqIYs76nZRZLiRl2V"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setMark(answers)
                });
        }
        getMarkData()

        async function getJehanData(){

            const answerData = query(answersColRef, where("user_id", "==", "in3qepEVlTw8UA37j3ig"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setJehan(answers)
                });
        }
        getJehanData()

        async function getMiyaData(){

            const answerData = query(answersColRef, where("user_id", "==", "1NdJtqbrEJC0JCWveezI"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setMiya(answers)
                });
        }
        getMiyaData()

        async function getHazelData(){

            const answerData = query(answersColRef, where("user_id", "==", "zp07Bp2kPEX5BFozHpJT"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setHazel(answers)
                });
        }
        getHazelData()

        async function getJenData(){

            const answerData = query(answersColRef, where("user_id", "==", "abu8beD3CmDBdUWEbLhu"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setJen(answers)
                });
        }
        getJenData()
        

    }, [])

    useEffect(() => {

        if (mark != null || frits != null || gayzel != null || phus != null || miya != null || hazel != null || jen != null || mark != jehan) {
            
            {mark?.map(data => (
                setMarkLie(data.lie_value)
            ))}  
    
            {frits?.map(data => (
                setFritsLie(data.lie_value)
            ))}
    
            {gayzel?.map(data => (
                setGayzelLie(data.lie_value)
            ))}
    
            {phus.map(data => (
                setPhusLie(data.lie_value)
            ))}
    
            {jehan?.map(data => (
                setJehanLie(data.lie_value)
            ))}
    
            {miya?.map(data => (
                setMiyaLie(data.lie_value)
            ))}
    
            {hazel?.map(data => (
                setHazelLie(data.lie_value)
            ))}
    
            {jen?.map(data => (
                setJenLie(data.lie_value)
            ))}   
        }

    }, [jen, miya, hazel, jehan, mark, phus, gayzel, frits])


    useEffect(() => {

        async function getFritzData(){

            const answerData = query(predictColRef, where("user_id", "==", "7B0xtSrziItksLppgPp0"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setFritsPredictions(answers)
                });
        }
        getFritzData()

        async function getGingData(){

            const answerData = query(predictColRef, where("user_id", "==", "t9zacmbSoIbIAgyfv1I5"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                setGayzelPredictions(answers)
                });
        }
        getGingData()

        async function getMarkData(){

            const answerData = query(predictColRef, where("user_id", "==", "EfdDqIYs76nZRZLiRl2V"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setMarkPredictions(answers)
                });
        }
        getMarkData()

        async function getPhusData(){

            const answerData = query(predictColRef, where("user_id", "==", "sdn9inyKc1pNqudmMRpt"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setPhusPredictions(answers)
                });
        }
        getPhusData()

        async function getJehanData(){

            const answerData = query(predictColRef, where("user_id", "==", "in3qepEVlTw8UA37j3ig"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setJehanPredictions(answers)
                });
        }
        getJehanData()

        async function getHazelData(){

            const answerData = query(predictColRef, where("user_id", "==", "zp07Bp2kPEX5BFozHpJT"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setHazelPredictions(answers)
                });
        }
        getHazelData()

        async function getMiyaData(){

            const answerData = query(predictColRef, where("user_id", "==", "1NdJtqbrEJC0JCWveezI"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setMiyaPredictions(answers)
                });
        }
        getMiyaData()

        async function getJenData(){

            const answerData = query(predictColRef, where("user_id", "==", "abu8beD3CmDBdUWEbLhu"));

            onSnapshot(answerData, (snapshot) => {
                let answers = [];
                snapshot.docs.forEach((doc) => {
                    answers.push({ ...doc.data(), id: doc.id })
                });
            
                    setJenPredictions(answers)
                });
        }
        getJenData()
      
    }, [])

   
    useEffect(() => {
        let values1 = [];
        {fritsPredictions?.forEach(data => (
          values1.push(data.clicked_answer)
        ))}
        setFritsPredictionsValue(values1);

        let values2 = [];
        {gayzelPredictions?.forEach(data => (
          values2.push(data.clicked_answer)
        ))}
        setGayzelPredictionsValue(values2);

        let values3 = [];
        {markPredictions?.forEach(data => (
          values3.push(data.clicked_answer)
        ))}
        setMarkPredictionsValue(values3);

        let values4 = [];
        {phusPredictions?.forEach(data => (
          values4.push(data.clicked_answer)
        ))}
        setPhusPredictionsValue(values4);

        let values5 = [];
        {jehanPredictions?.forEach(data => (
          values5.push(data.clicked_answer)
        ))}
        setJehanPredictionsValue(values5);

        let values6 = [];
        {miyaPredictions?.forEach(data => (
          values6.push(data.clicked_answer)
        ))}
        setMiyaPredictionsValue(values6);

        let values7 = [];
        {hazelPredictions?.forEach(data => (
          values7.push(data.clicked_answer)
        ))}
        setHazelPredictionsValue(values7);

        let values8 = [];
        {jenPredictions?.forEach(data => (
          values8.push(data.clicked_answer)
        ))}
        setJenPredictionsValue(values8);
        
    }, [fritsPredictions])

    useEffect(() => {
        
        if (computeScores == true) {
            
            let values = [gayzelLie, markLie, phusLie, jehanLie, miyaLie, hazelLie, jenLie, fritsLie];
            
            let resultsFritz = [];
            let resultsGayzel = [];
            let resultsJehan = [];
            let resultsPhus = [];
            let resultsMark = [];
            let resultsMiya = [];
            let resultsHazel = [];
            let resultsJen = [];

            for (let i = 0; i < values.length; i++) {

                let regex = new RegExp("^" + values[i]);

                let resultMark = markPredictionsValue.some(element => regex.test(element));           
                resultsMark.push(resultMark);
                
                let resultFritz = fritsPredictionsValue.some(element => regex.test(element));           
                resultsFritz.push(resultFritz);

                let resultGayzel = gayzelPredictionsValue.some(element => regex.test(element));           
                resultsGayzel.push(resultGayzel);

                let resultJehan = jehanPredictionsValue.some(element => regex.test(element));           
                resultsJehan.push(resultJehan);

                let resultPhus = phusPredictionsValue.some(element => regex.test(element));           
                resultsPhus.push(resultPhus);


                let resultMiya = miyaPredictionsValue.some(element => regex.test(element));           
                resultsMiya.push(resultMiya);

                let resultHazel = hazelPredictionsValue.some(element => regex.test(element));           
                resultsHazel.push(resultHazel);

                let resultJen = jenPredictionsValue.some(element => regex.test(element));           
                resultsJen.push(resultJen);
            }
            
            for (let i = 0; i < resultsFritz.length; i++) {
               // console.log(resultsFritz)
                setFritsScores(prevState => {
                    
                if (resultsFritz[i] == true) {
                    return prevState + 1;
                }
                
                else {
                    return prevState;
                }
                });
            }

            for (let i = 0; i < resultsGayzel.length; i++) {
                


                setGayzelScores(prevState => {
                    
                    if (resultsGayzel[i] == true) {
                    return prevState + 1;
                    }
                    
                    else {
                    return prevState;
                    }
                });
            }

            for (let i = 0; i < resultsMark.length; i++) {

                setMarkScores(prevState => {
                    //console.log("Data" + resultsMark); 
                    if (resultsMark[i] == true) {
                       
                    
                        return prevState + 1;
                    }
                    else {
                        return prevState;
                    }
                });
            }

            for (let i = 0; i < resultsPhus.length; i++) {
                


                setPhusScores(prevState => {
                    
                    if (resultsPhus[i] == true) {
                    return prevState + 1;
                    }
                    
                    else {
                    return prevState;
                    }
                });
            }

            for (let i = 0; i < resultsJehan.length; i++) {
                

                //console.log("Jehan result " + resultsJehan)
                setJehanScores(prevState => {
                    
                    if (resultsJehan[i] == true) {
                    return prevState + 1;
                    }
                    
                    else {
                    return prevState;
                    }
                });
            }

            for (let i = 0; i < resultsMiya.length; i++) {
                


                setMiyaScores(prevState => {
                    
                    if (resultsMiya[i] == true) {
                    return prevState + 1;
                    }
                    
                    else {
                    return prevState;
                    }
                });
            }

            for (let i = 0; i < resultsHazel.length; i++) {
                


                setHazelScores(prevState => {
                    
                    if (resultsHazel[i] == true) {
                    return prevState + 1;
                    }
                    
                    else {
                    return prevState;
                    }
                });
            }

            for (let i = 0; i < resultsJen.length; i++) {
                


                setJenScores(prevState => {
                    
                    if (resultsJen[i] == true) {
                    return prevState + 1;
                    }
                    
                    else {
                    return prevState;
                    }
                });
            }
        }


      }, [computeScores]);

    
    
    
    return (
        <div className="relative w-[1000px] h-[600px] bg-primary rounded-xl flex items-center justify-center flex-col">
            <button className="border-2 rounded-full px-4 py-2 text-4xl absolute top-[20px] right-[20px] font-semibold text-text hover:text-5xl transition-all duration-300 ease-in-out" onClick={() => showTally(false)}>X</button>

            <div className=" flex flex-col items-center justify-center text-text gap-4">
                <h1 className="font-semibold text-4xl">Scores</h1>

                <label className="text-3xl text-secondary mt-4">
                    Sir Phus: 
                    <span className="text-3xl text-text"> {phusScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Sir Fritz: 
                    <span className="text-3xl text-text"> {fritsScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Ma'am Gayzel: 
                    <span className="text-3xl text-text"> {gayzelScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Ma'am Jehan: 
                    <span className="text-3xl text-text"> {jehanScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Ma'am Miya: 
                    <span className="text-3xl text-text"> {miyaScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Ma'am Hazel: 
                    <span className="text-3xl text-text"> {hazelScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Ma'am Jen: 
                    <span className="text-3xl text-text"> {jenScores}</span>
                </label>

                <label className="text-3xl text-secondary">
                    Sir Mark: 
                    <span className="text-3xl text-text"> {markScores}</span>
                </label>
            </div>

            <button className="border-2 border-text text-2xl px-4 py-2 rounded-xl mt-6 text-text" onClick={() => setComputeScores(true)}>Calculate</button>


        </div>
    )
}

export default Tally