import React from "react";
import { Header, Footer } from "../../components";

const MainLayout = ({children}) => {
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export {MainLayout}