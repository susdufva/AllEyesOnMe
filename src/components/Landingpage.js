import React from 'react'
import bgimage from "./img/bg_sofia.jpg"

function Landingpage() {
    return (
        <body>
            <div className="flex justify-center items-center mt-2">
                <div className="lg:w-2/5 md:w-1/2 w-1/1 h-full">
                    <img src={bgimage} alt="homepage" />
                </div> 
                <div className="lg:w-1/3 md:w-1/2 w-1/1 h-full mt-8">
                    <h3 className="text-white font-bold md:text-3xl text-left">Unique Customisations <br/>of Handpicked Frames </h3>
                    <p className="w-4/5 text-white text-left text-xs sm:text-sm mt-4">Sofia Ljusberg adds her vision and final touch, resulting in the unique artwork that speaks for itself and puts All Eyes on You! </p>   
                </div>
            </div>
        </body>
    )
}

export default Landingpage
