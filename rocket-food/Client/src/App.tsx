import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import LogIn from './Page/LogIn'
import CreateAccount from './Page/CreateAccount';
import Terms from './Page/Terms';
import Privacy from './Page/Privacy';
import RocketFood from './Page/RocketFood';
import RestaurantPage from './Page/RestaurantPage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/LogIn" element={<LogIn/>} />
                <Route path="/CreateAccount" element={<CreateAccount/>} />
                <Route path="/Privacy" element={<Privacy/>} />
                <Route path="/RocketFood" element={<RocketFood/>}/>
                <Route path="/Terms" element={<Terms/>} />
                <Route path="/RestaurantPage" element={<RestaurantPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;