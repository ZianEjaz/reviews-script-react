import React from 'react'
import { Animated } from "react-animated-css";


const Home = () => {
    return (
        <Animated animationIn="animate__fadeInUpBig" animationOut="animate__fadeOut" isVisible={true}>

        
        <div className="justify-center bg-gray-600 shadow-2xl p-5 m-5 text-white border-b-4">
            <p className="text-2xl m-auto p-3 m-3">
                Reveiws Generator For Our Shopift Web Stores

            </p>
            <p className="text-xl">
                Please Select an account and cilck COPY button<br />
                Paste the copied text to custom HTML field of shopifty store reviews section<br />
                <br />
                <p className="text-2xl">How It Works</p><br />
                The scripts reads comments from Json file and converts into HTML<br />
                Generates reviews with adding one date automatically to 3 or 4 reviews<br />
                you can change the final comments and see changes live in built in rich text editor<br />

            </p>

        </div>
        </Animated>
    )
}

export default Home
