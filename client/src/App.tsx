import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import {DefaultLayout} from "./view/commen/DefaultLayout/DefaultLayout";
import {Login} from "./view/page/Login/Login";
import {SingUp} from "./view/page/Login/SingUp";

function App() {
    return ( <BrowserRouter>
            {/*<DefaultLayout/>*/}
            {/* <Login/>*/}
            <Routes>
                <Route path="/*"
                       Component={DefaultLayout}>
                </Route>
                <Route path="/login"
                       Component={Login}>
                </Route>
                <Route path="/singup"
                       Component={SingUp}>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
