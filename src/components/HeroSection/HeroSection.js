import React from 'react';
import TeamImg from '../../Images/illustration-1.svg'

const HeroSection = () => {
    return (
        <div>
            {/* ======Hero Section======= */}
            <div className="hero-section h-auto py-5">
                <div className="sm:px-10 px-5">
                <div className="flex flex-col lg:flex-row items-center ">
                <div className="text-area order-1 space-y-5 md:space-y-4 py-10">
                    <h1 className="text-2xl sm:text-4xl font-bold leading-normal ">All your files in one secure location, accessable anywhere.</h1>
                    <p className="leading-7 text-md sm:text-lg" >Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                    <div className="start-form">
                        <form>
                            <input className="outline-none border-2 hover:border-3 border-indigo-900 py-1 px-2 rounded" type="email" placeholder="Email" />
                            <button className="bg-indigo-500 mx-3 text-white">Get Started</button>
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