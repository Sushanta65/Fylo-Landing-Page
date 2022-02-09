import React from 'react';
import TeamImg from '../../Images/illustration-1.svg';
import './HeroSection.css'

const HeroSection = () => {
    const startMassege = (e) => {
       e.preventDefault()
       alert("Sorry! You can't start right now. Try again later.")
    }
    return (
        <div>
            {/* ======Hero Section======= */}
            <div className="hero-section h-auto py-5">
                <div className="sm:px-10 px-5">
                <div className="flex flex-col lg:flex-row items-center justify-evenly">
                <div className="text-area order-1 space-y-5 md:space-y-4 py-10 text-center sm:text-left">
                    <h1 className="first-heading text-2xl sm:text-4xl font-bold leading-10 sm:leading-relaxed">All your files in one secure location, accessable anywhere.</h1>
                    <p className="first-heading-child sm:leading-loose how text-md sm:text-lg" >Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                    <div className="start-form">
                        <form className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 ">
                            <input className="outline-none border-2 focus:border-indigo-900 border-indigo-400 duration-300 py-2 lg:py-1.5 px-2 rounded" type="email" placeholder="Email" />
                            <button onClick={startMassege} className="get-started-btn py-2.5 lg:py-2 px-5 lg:mx-5 rounded text-white font-semibold hover:bg-indigo-500 duration-500 hover:shadow-md hover:shadow-gray-400">Get Started</button>
                        </form>
                    </div>
                </div>
                <div className="image-area lg:order-1">
                    <img src={TeamImg} alt="StartUp" />
                </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default HeroSection;