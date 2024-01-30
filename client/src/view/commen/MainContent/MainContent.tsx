import {Component} from "react";
import {Route, Routes} from "react-router-dom";


import {Home} from "../../page/Home/Home";
import {About} from "../../page/About/About";
import {Menu} from "../../page/Menu/Menu";
import {Blog} from "../../page/Blog/Blog";
import {Contact} from "../../page/Contact/Contact";
import {Cart} from "../../page/Cart/Cart";

export class MainContent extends Component {
    render() {
        return (
            <>

                <div className="mx-auto">
                    <Routes>
                        <Route path="/" Component={Home}></Route>
                        <Route path="/about" Component={About}></Route>
                        <Route path="/menu" Component={Menu}></Route>
                        <Route path="/blog" Component={Blog}></Route>
                        <Route path="/contact" Component={Contact}></Route>
                        <Route path="/cart" Component={Cart}></Route>
                    </Routes>
                </div>

            </>
        );
    }
}
