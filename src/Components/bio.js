import bioImg from "../images/bio.png";
import number from "../images/Number.png";
import Number2 from "../images/Number2.png";
import Number3 from "../images/Number3.png";
import Number4 from "../images/Number4.png";
import Number5 from "../images/Number5.png";


function Bio(){
    return <div className="w-[90%] mx-auto flex items-center justify-evenly p-6 ">
        <div className="w-[451px] ">
            <img src={bioImg} />
        </div>
        <div className="w-[545px] flex flex-col gap-3 ">
            <h1 className="font-[700] text-5xl text-black">Wakanda is an easy <br /> platform to find talent</h1>
            <div className="flex gap-3"><img src={number} /><p className="font-[400] text-base text-black">Sign in to our website</p></div>
            <div className="flex gap-3"><img src={Number2} /><p className="font-[400] text-base text-black">Fill out neccesary information</p></div>
            <div className="flex gap-3"><img src={Number3} /><p className="font-[400] text-base text-black">Discover thoudsands of freelancers</p></div>
            <div className="flex gap-3"><img src={Number4} /><p className="font-[400] text-base text-black">View freelancer’s profile and hire</p></div>
            <div className="flex gap-3"><img src={Number5} /><p className="font-[400] text-base text-black">Complete payment & it’s time to work!</p></div>
        </div>
    </div>
}

export default Bio;