import {Component} from "react";
import {Route, Routes} from "react-router-dom";

import {About} from "../../page/About/About";
import {Menu} from "../../page/Menu/Menu";
import {Contact} from "../../page/Contact/Contact";
import Cart from "../../page/Cart/Cart";
import Home from "../../page/Home/Homes";

export class MainContent extends Component {
    render() {
        return (
            <>

                <div className="mx-auto">
                    <Routes>
                        <Route path="/" Component={Home}></Route>
                        <Route path="/about" Component={About}></Route>
                        <Route path="/menu" Component={Menu}></Route>
                        <Route path="/contact" Component={Contact}></Route>
                        <Route path="/cart" Component={Cart}></Route>
                    </Routes>
                </div>

            </>
        );
    }
}
