
const Navbarthree = () => {
return (
    <nav className="py-4 bg-gradient-to-br from-blue-700 to-orange-500 mb-6">
        <div className="container">
        <div className="menu-row flex justify-between items-center">
        <div className="logo w-12">
                <a href="#"><img className=" rounded" src="images/logo-3.png" alt="logo3" /></a>
            </div>
            <div className="navbar">
                <ul className="flex gap-2">
                    <li><a className="text-sky-700 bg-white px-3 py-1 rounded hover:text-black hover:bg-red-400" href="#">home</a></li>
                    <li><a className="text-sky-700 bg-white px-3 py-1 rounded hover:text-black hover:bg-red-400" href="#">about</a></li>
                    <li><a className="text-sky-700 bg-white px-3 py-1 rounded hover:text-black hover:bg-red-400" href="#">contact</a></li>
                    <li><a className="text-sky-700 bg-white px-3 py-1 rounded hover:text-black hover:bg-red-400" href="#">blog</a></li>
                    <li><a className="text-sky-700 bg-white px-3 py-1 rounded hover:text-black hover:bg-red-400" href="#">service</a></li>
                </ul>
            </div>
        </div>
        </div>
    </nav>
)
}

export default Navbarthree