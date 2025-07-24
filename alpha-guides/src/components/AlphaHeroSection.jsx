export default function AlphaHeroSection() {
    return (
      <section className="relative bg-gradient-to-br from-[#3576dd] to-[#0046ff] min-h-[650px] flex flex-col justify-center">
        {/* Main content area centered */}
        <div className="flex-grow flex items-center -mt-1 md:-mt-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center z-10 px-6">
            <div className="flex-1 text-white flex flex-col items-start md:items-start justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">
                Why Alpha Works Better<br />Than Traditional School
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-lg drop-shadow">
                See the difference in how students learn, grow, and lead.
              </p>
              <a
                href="#get-started"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-blue-100 transition"
              >
                Get Started
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
                alt="Alpha students"
                className="w-64 md:w-96 rounded-3xl shadow-2xl border-8 border-white/60"
              />
            </div>
          </div>
        </div>
        {/* Tall, pronounced curved SVG at the bottom */}
        <svg
          viewBox="0 0 1440 500"
          className="absolute bottom-0 left-0 w-full"
          fill="none"
          preserveAspectRatio="none"
          style={{ minHeight: 180, maxHeight: 500 }}
        >
          <path
            d="
              M0,320
              C400,500 1040,140 1440,350
              L1440,500
              L0,500
              Z
            "
            fill="#f3f7ff"
          />
        </svg>
      </section>
    );
  }
  