import React from 'react'
import bgimage from "./img/bg.jpg"

function Landingpage() {
    return (
        <body>
            <div className="flex justify-center items-center mt-2">
                <div className="lg:w-1/4 md:w-1/2 w-2/3">
                    <img src={bgimage} alt="homepage image" />
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
