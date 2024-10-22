
const Navbarfive = () => {
  return (
    <>
    <nav className="py-5 bg-gradient-to-tr from-green-200 to-red-300">
        <div className="container">
            <div className="main-row flex justify-between items-center">
                <div className="logo">
                    <a href="#"><img className="w-10 rounded" src="images/logo-5.png" alt="logo5" /></a>
                </div>
                <div className="search">
                    <input placeholder="Search " className="border-0 outline-none" type="text" />
                    <a className="px-3 py-0.5 bg-cyan-500 rounded hover:bg-cyan-600 hover:text-white" href="#">search</a>
                </div>
                <div className="navbar">
                    <ul className="flex gap-3">
                        <li><a className="px-4 py-1 bg-gradient-to-bl from-violet-400 to-orange-400 rounded text-red-800 " href="#">Home</a></li>
                        <li><a className="px-4 py-1 bg-gradient-to-bl from-violet-400 to-orange-400 rounded text-red-800 " href="#">contain</a></li>
                        <li><a className="px-4 py-1 bg-gradient-to-bl from-violet-400 to-orange-400 rounded text-red-800 " href="#">Blog</a></li>
                        <li><a className="px-4 py-1 bg-gradient-to-bl from-violet-400 to-orange-400 rounded text-red-800 " href="#">Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbarfive