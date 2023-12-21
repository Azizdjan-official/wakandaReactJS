import asian from "../images/asian.png"

function Action(){
    return <div>
        <div className="w-[90%] mx-auto bg-cyan-600 my-20 flex items-center justify-around">
            <div><img src={asian} /></div>
            <div>
                <h1 className="font-[600] text-base text-white">WHAT ARE YOU WAITING FOR?</h1>
                <h2 className="my-6 font-[700] text-5xl text-white">Find the talent to get <br /> your business growing</h2>
                <button className="header-btn text-cyan-600 bg-white px-3 py-2 rounded-lg">Get Started</button>

            </div>
        </div>
    </div>
}

export default Action;