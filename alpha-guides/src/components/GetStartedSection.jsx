const CTAS = [
    {
      title: "Meet our Guides",
      href: "/meet-guides",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      primary: false
    },
    {
      title: "Schedule a Tour",
      href: "/schedule-tour",
      icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      primary: false
    },
    {
      title: "Attend an Information Session",
      href: "/info-session",
      icon: "https://cdn-icons-png.flaticon.com/512/2917/2917991.png",
      primary: false
    },
    {
      title: "Contact Us",
      href: "/contact",
      icon: "https://cdn-icons-png.flaticon.com/512/3059/3059566.png",
      primary: false
    },
    {
      title: "Apply Now",
      href: "/apply",
      icon: "https://cdn-icons-png.flaticon.com/512/929/929564.png",
      primary: true
    }
  ];
  
  export default function GetStartedSection() {
    return (
      <section className="py-20 bg-[#f3f7ff]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            Ready to take the next step?
          </h2>
          <div className="grid md:grid-cols-2 gap-10 w-full">
            {CTAS.map((cta, i) => (
              <a
                key={i}
                href={cta.href}
                className={`flex items-center gap-5 
                  rounded-full px-7 py-6 font-bold text-lg shadow-md border 
                  transition hover:bg-blue-700 hover:text-white ${cta.primary
                    ? "bg-blue-700 text-white border-blue-900 hover:bg-blue-900"
                    : "bg-white text-blue-700 border-blue-200"}`}
              >
                <img src={cta.icon} className="w-9 h-9" alt="" />
                <span className="flex-1">{cta.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  