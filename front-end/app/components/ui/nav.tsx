export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 border border-gray-200 rounded-md flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
            Z
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Cybrix
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Advantages
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Features
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Documentation
          </a>
        </nav>

        {/* Login Button */}
        <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition">
          LOGIN
        </button>

      </div>
    </header>
  );
}
