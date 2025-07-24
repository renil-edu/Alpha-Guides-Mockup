const testimonials = [
    {
      text: `My guide has been an incredible support system for me. They’ve helped me build confidence and develop a growth mindset that’s carried over into all areas of my life.`,
      author: "Emily, Grade 7",
      avatar: "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
      text: `The personal connection our Guide built with my son was incredible. He went from hating school to asking if he could stay late to work on projects.`,
      author: "Marcus, Parent",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];
  
  export default function TestimonialsQuotesSection() {
    return (
      <section className="py-20 bg-white border-b border-blue-100 relative">
        <svg className="absolute left-2 -top-10 h-24 w-24 opacity-10 z-0" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="#4EC9F8"/>
        </svg>
        <div className="max-w-5xl mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            What People Say About our Guides
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-blue-50 rounded-3xl border border-blue-100 p-8 shadow-lg flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-16 h-16 object-cover rounded-full mb-5 border-4 border-white shadow"
                />
                <p className="text-xl text-blue-900 italic mb-4 text-center">“{t.text}”</p>
                <div className="font-semibold text-blue-700 text-center">{t.author}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }
  