import React from 'react';

const GetAccessSection = () => {
    const startAlert = (e) => {
        e.preventDefault();
        alert("Sorry! You can't start right now for fee, Please try agian later.")
    }
    return (
        <div className="get-access-section py-14" style={{backgroundColor: "#575989"}}>
            <div className="flex flex-col items-center text-center lg:text-left space-y-5 lg:flex-row lg:justify-between px-10">
                <div className="get-access-text-area lg:w-2/4">
                    <h1 className="text-2xl pb-3 font-bold text-gray-300" >Get Early Access Today</h1>
                    <p className="text-gray-300 text-sm md:text-base">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you,</p>
                </div>
                <div className="submit-access-via-email md:w-1/3">
                    <form className="flex flex-col items-center lg:items-start space-y-3 md:space-y-5">
                        <input className="w-full py-2 px-2 rounded focus:outline-0 text-sm" type="email" placeholder="Email" />
                        <button onClick={startAlert} className="text-gray-50 py-2 px-3 w-full sm:w-2/2 lg:w-1/2 text-sm rounded hover:text-indigo-200 duration-500" style={{background: "#6b9bff"}}>Get Started For Free</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetAccessSection;