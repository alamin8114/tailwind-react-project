
const NavbarTwo = () => {
return (
    <nav className="py-4 bg-gradient-to-tr from-purple-400  to-sky-400 mb-5" >
        <div className="container">
            <div className="menu-row flex justify-between items-center">
                <div className="logo">
                    <a href="#"><img className="w-16 rounded" src="images/logo-2-img.png" alt="logo" /></a>
                </div>
                <div className="navbar">
                    <ul className="flex gap-4">
                        <li><a className="text-x text-white bg-gradient-to-tl from-green-500 to-pink-400 px-2 py-1 rounded hover:text-black" href="#">Home</a></li>
                        <li><a className="text-x text-white bg-gradient-to-tl from-green-500 to-pink-400 px-2 py-1 rounded hover:text-black " href="#">about</a></li>
                        <li><a className="text-x text-white bg-gradient-to-tl from-green-500 to-pink-400 px-2 py-1 rounded hover:text-black " href="#">blog</a></li>
                        <li><a className="text-x text-white bg-gradient-to-tl from-green-500 to-pink-400 px-2 py-1 rounded hover:text-black " href="#">contain</a></li>
                        <li><a className="text-x text-white bg-gradient-to-tl from-green-500 to-pink-400 px-2 py-1 rounded hover:text-black " href="#">service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)
}

export default NavbarTwo