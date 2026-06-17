export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide text-yellow-500">
          Cuppoi
        </h1>

        <div className="flex gap-4 text-sm">
          <a href="#home" className="hover:text-yellow-500 transition">
            Home
          </a>

          <a href="#coffee" className="hover:text-yellow-500 transition">
            Coffee
          </a>

          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}