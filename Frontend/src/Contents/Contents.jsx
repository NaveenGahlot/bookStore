import React from "react";
import Navebar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default function Contents(){
    return(
        <>
        <Navebar />
        <div className="min-h-screen">
            <Content />
        </div>
        <Footer />
        </>
    )
}