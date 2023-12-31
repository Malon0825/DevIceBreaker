import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes as Switch, Route, } from "react-router-dom"
import { AuthProvider } from './Context/Auth'
import PrivateRoute from './context/PrivateRoute.jsx'
import App from './components/App'
import Home from './components/Home'
import Parent from './components/Parent'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

            <Router>

                <AuthProvider>

                  <Switch>

                    <Route path="/" element={<Parent/>} />\
                    
{/* 
                    <Route path="/" element={<App/>} />\
                    <Route path="/parent" element={<Parent/>} />\

                    <Route path="/twotruthandaliehome" element={<Home/>} />\

                        <Route path='/home' element={<PrivateRoute/>}>
                                <Route exact path='/home' element={<Home/>}/>
                        </Route>  */}

                    </Switch>          
                </AuthProvider> 
            </Router>
    </React.StrictMode>,
    )
