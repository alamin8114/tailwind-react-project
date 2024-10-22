
const Navbarfour = () => {
return (
    <>
    <nav className="py-3 bg-gradient-to-bl from-gray-400 to-yellow-200 mb-5">
        <div className="container">
            <div className="menu-row flex justify-between items-center">
                <div className="logo">
                    <a href="#">
                        <img className="w-12" src="images/logo-4.png" alt="logo4" />
                    </a>
                </div>
                <div className="navbar">
                    <ul className="flex gap-2">
                    <li><a className="bg-black text-white px-2 py-1 rounded hover:text-black hover:bg-white" href="#">Home</a></li>
                    <li><a className="bg-black text-white px-2 py-1 rounded hover:text-black hover:bg-white" href="#">About</a></li>
                    <li><a className="bg-black text-white px-2 py-1 rounded hover:text-black hover:bg-white" href="#">Contain</a></li>
                    <li><a className="bg-black text-white px-2 py-1 rounded hover:text-black hover:bg-white" href="#">service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
)
}

export default Navbarfour 