import achki from "../images/achki.png";

function Explore(){
    return <div className="bg-cyan-200">
        <div className="w-[90%] mx-auto flex justify-center items-center py-10">
            <div className=" w-[544px] flex flex-col gap-6">
                <h1 className="text-black text-5xl font-[700]">Explore and hire talent <br /> from our platform</h1>
                <p className="text-black text-base font-[400]">We've got experts for every industry - all under one roof! You can <br /> find everything from WordPress developers to <br /> Graphic designers to copywriters and many more at Wakanda.</p>
                <button className="header-btn w-[148px] bg-cyan-600 text-white px-3 py-2 rounded-lg">Explore now</button>
            </div>
            <div className="w-[494px]">
                <img src={achki} />
            </div>
        </div>
    </div>
}

export default Explore;