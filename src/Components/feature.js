import icon from "../images/Icon.png";
import icon2 from "../images/Icon2.png";
import icon3 from "../images/Icon3.png";

function Feature(){
    return <div className="bg-cyan-700 flex flex-col items-center justify-center py-4">
        <div className="w-[90%] mx-auto">
        <div className="flex flex-col">
            <h1 className="text-slate-200 mt-20 mb-6 text-center text-base font-[600]">FEATURE</h1>
            <h2 className="text-white text-5xl text-center font-[700]">The benefit of using <br /> our platform</h2>
        </div>
        <div className="flex gap-2  justify-between mt-14">
            <div className="w-[356px] ">
                <img className="w-[108px] h-[108px]" src={icon} />
                <h1 className="font-[700] text-2xl text-white mt-10 mb-4">Professional & Fast</h1>
                <h2 className="font-[400] text-base text-slate-300">Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you.</h2>
            </div>
            <div className="w-[356px] ">
                <img className="w-[108px] h-[108px]" src={icon2} />
                <h1 className="font-[700] text-2xl text-white mt-10 mb-4">24/7 support</h1>
                <h2 className="font-[400] text-base text-slate-300">You have any concerns or questions? Don’t worry, we have our support team to help you at anytime and anywhere.</h2>
            </div>
            <div className="w-[356px] ">
                <img className="w-[108px] h-[108px]" src={icon3} />
                <h1 className="font-[700] text-2xl text-white mt-10 mb-4">Safe & Secure</h1>
                <h2 className="font-[400] text-base text-slate-300">We know that safety is the most important thing for our customer, so all of our payments are processed instantly and securely.</h2>
            </div>
        </div>
        </div>

    </div>
}

export default Feature;