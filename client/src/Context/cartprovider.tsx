import { useState } from "react";
import CartCOntext from "./context";

export function CartProvider({ children }: React.PropsWithChildren) {

    const [cartItems,setCartItems] = useState<any>([]);

    function setCartData(data:any,quantity:number) {
        setCartItems((prev:any) => [...prev, {...data,quantity}]);    
    }

    function removeData() {
        setCartItems([]);
    }

    return <CartCOntext.Provider value={{cartItems,setCartData,removeData}}>
        {children}
    </CartCOntext.Provider>;
}   