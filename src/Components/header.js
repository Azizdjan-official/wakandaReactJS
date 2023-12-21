import logo from "../images/Logo.png";

function Header (){
    return <header className="w-[90%] mx-auto py-2 main-header flex justify-between gap-2 items-center">
    <img src={logo}/>
    <nav className="flex items-center gap-4">
          <a href="/about.html">Home</a>
          <a href="/about.html">About Us</a>
          <a href="/contact.html">How it Works</a>
          <a href="/login.html">For Freelancer</a>
          <button className="header-btn bg-cyan-600 text-white px-3 py-2 rounded-lg">Get Started</button>
    </nav>
  </header>
}

export default Header;