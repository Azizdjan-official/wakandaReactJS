import img1 from "../images/airbnb.svg";
import img2 from "../images/amazon.svg";
import img3 from "../images/google.svg";
import img4 from "../images/netflix.svg";
import img5 from "../images/slack.svg";

function Logos(){
    return <div className="w-[90%] mx-auto my-8 mb-12 pt-4 flex items-center justify-between">
        <img src={img1} />
        <img src={img3} />
        <img src={img5} />
        <img src={img4} />
        <img src={img2} />
    </div>
}

export default Logos;