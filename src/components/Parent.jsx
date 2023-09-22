import React, {useState, useEffect} from 'react'
import Home from './Home'
import App from './App'

const Parent = () => {
    const [toggleUserId, setToggleUserId] = useState(true)
    const [userId, setUserId] = useState(true)

  return (
    <div className="flex w-screen h-screen">

        <div className={`${toggleUserId? 'flex' : 'hidden'}`}>
            <App currentUserId={setUserId} toggleUser={setToggleUserId}/>
        </div>

        <div className={`${toggleUserId? 'hidden' : 'flex'} `}>
            <Home currentUserId={userId}/>
        </div>
        
    </div>
  )
}

export default Parent