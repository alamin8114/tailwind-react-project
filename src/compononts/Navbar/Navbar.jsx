
const Navbar = () => {
  return (
    <nav className="py-4 bg-red-600 mb-5">
      <div className="container">
        <div className="menu-row flex justify-between items-center">
          <div className="logo w-20">
            <a href="#"><img className="rounded" src="images/logo-img.png" alt="logo" /></a>
            </div>
            <div className="navbar">
              <ul className="flex gap-5">
                <li><a className="text-white px-2 py-1 rounded hover:bg-white hover:text-black bg-black" href="#">Home</a></li>
                <li><a className="text-white px-2 py-1 rounded hover:bg-white hover:text-black bg-black" href="#">About</a></li>
                <li><a className="text-white px-2 py-1 rounded hover:bg-white hover:text-black bg-black" href="#">blog</a></li>
                <li><a className="text-white px-2 py-1 rounded hover:bg-white hover:text-black bg-black" href="#">service</a></li>
                <li><a className="text-white px-2 py-1 rounded hover:bg-white hover:text-black bg-black" href="#">contact</a></li>
              </ul>
            </div>
        </div>
      </div>
      </nav> 
  )
}

export default Navbar