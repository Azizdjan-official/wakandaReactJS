import menImg from "../images/Group 1.png";

function Showcase(){
    return <div className="showcase w-[90%] mx-auto  flex items-center justify-between pb-14">
        <div className=" w-[50%] flex flex-col gap-6">
            <h1 className="text-black text-6xl font-[700]">Recruit top talented <br /> freelancer for your <br /> business</h1>
            <p className="text-black text-base font-[400]">Connect you to thoudsands of talented freelancer from <br /> any industry. You can have the best people in just few <br /> simple steps.</p>
            <button className="header-btn w-[148px] bg-cyan-600 text-white px-3 py-2 rounded-lg">Get Started</button>
        </div>
        <div className="w-[50%]">
            <img className="w-[92%] " src={menImg}  />
        </div>
    </div>
}
export default Showcase;