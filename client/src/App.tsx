import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import {DefaultLayout} from "./view/commen/DefaultLayout/DefaultLayout";
import {Login} from "./view/page/Login/Login";
import SingUp from "./view/page/Login/SingUp";
import AdminLayout from './view/commen/DefaultLayout/AdminLayout';
import AdminAddProduct from './view/page/admin/admin-add-product.page';
import AdminProduct from './view/page/admin/admin-products.page';
import AdminDashboard from './view/page/admin/admin-dashboard.page';
import AdminLogin from './view/page/admin/admin-login.page';

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
                <Route path="/signup"
                       Component={SingUp}>
                </Route>




                {/* <Route path='/admin'
                Component={AdminLayout}>
                </Route> */}

                <Route path='/adminProduct'
                Component={AdminProduct}>
                </Route>

                <Route path='/adminProduct/adminAddProduct'
                Component={AdminAddProduct}>
                </Route>

                <Route path='/adminDashboard'
                Component={AdminDashboard}>
                </Route>

                <Route path='/adminLogin'
                Component={AdminLogin}>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
