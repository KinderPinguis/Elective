import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import LogIn from './Page/LogIn'
import CreateAccount from './Page/CreateAccount';
import Terms from './Page/Terms';
import Privacy from './Page/Privacy';
import EditProfile from './Page/EditProfile';
import RocketFood from './Page/RocketFood';
import RestaurantPage from './Page/RestaurantPage';
import CreateRestaurant from "./Page/CreateRestaurant";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/LogIn" element={<LogIn/>} />
                <Route path="/CreateAccount" element={<CreateAccount/>} />
                <Route path="/EditProfile" element={<EditProfile/>} />
                <Route path="/Privacy" element={<Privacy/>} />
                <Route path="/RocketFood" element={<RocketFood/>}/>
                <Route path="/Terms" element={<Terms/>} />
                <Route path="/RestaurantPage" element={<RestaurantPage/>} />
                <Route path="/CreateRestaurant" element={<CreateRestaurant/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;