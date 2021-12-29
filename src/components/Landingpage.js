import React from 'react'
import bgimage from "./img/bg_sofia.jpg"

function Landingpage() {
    return (
        <body>
            <div className="flex justify-center items-center mt-2">
                <div className="lg:w-2/5 md:w-1/2 w-1/1 h-full">
                    <img src={bgimage} alt="homepage" />
                </div> 
                <div className="">
                    <h3 className=""></h3>
                    <p className=""></p>   
                </div>
            </div>
        </body>
    )
}

export default Landingpage
