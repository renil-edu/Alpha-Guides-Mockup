// src/components/AlphaHeader.jsx
export default function AlphaHeader() {
  return (
    <header className="relative bg-gradient-to-br from-[#3576dd] to-[#0046ff] pb-0">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          {/* <img
            src="https://alpha.school/assets/logo.png"
            alt="Alpha School"
            className="h-8 w-auto mr-2"
          /> */}
          <span className="text-xl font-bold tracking-tight text-white">ALPHA</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white text-sm font-medium hover:underline">The Program</a>
          <a href="#" className="text-white text-sm font-medium hover:underline">Admission</a>
          <a href="#" className="text-white text-sm font-medium hover:underline">Locations</a>
          <a href="#" className="text-white text-sm font-medium hover:underline">Events</a>
          <a href="#" className="text-white text-sm font-medium hover:underline">Resources</a>
          <a href="#" className="text-white text-sm font-medium hover:underline">Insights</a>
        </div>
        <a
          href="#"
          className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
        >Learn More</a>
      </nav>
    </header>
  );
}
