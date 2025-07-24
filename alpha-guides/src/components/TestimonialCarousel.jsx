import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaInstagram, FaYoutube } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const carouselData = [
  {
    type: "video",
    title: "My Guide Helped Me Build Confidence",
    url: "https://www.youtube.com/embed/lwmbYek5QwA",
    author: "Emily, 7th Grade",
    caption: "They helped me build a mindset that carries over to all of life."
  },
  {
    type: "instagram",
    title: "Guide Highlight",
    url: "https://www.instagram.com/p/CpJKqjSldxB/",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
    author: "@thealpha.guide",
    caption: "Day in the life of an Alpha Guide."
  },
  {
    type: "quote",
    quote: "We were blown away by the level of care and attention our child’s Guide showed them. It’s clear that they’re not just educators, but mentors and role models.",
    author: "Sarah, Parent"
  },
  {
    type: "quote",
    quote: "My daughter’s Guide believed in her potential when she didn’t believe in herself. Now she’s running her own business at age 12!",
    author: "Sarah, Parent"
  },
  {
    type: "video",
    title: "Personal Connection and Project Work",
    url: "https://www.youtube.com/embed/TJhtzJlSYIk",
    author: "Marcus, Parent",
    caption: "My son went from hating school to staying late to work on projects."
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f3f7ff] to-[#e8f2ff] border-b border-blue-100 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          Our Guides Change Lives
        </h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          className="rounded-2xl shadow-xl"
        >
          {carouselData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl py-12 px-6 flex flex-col items-center relative min-h-[350px] flex-grow">
                {item.type === "video" && (
                  <>
                    <span className="mb-1 text-blue-700 text-3xl"><FaYoutube /></span>
                    <div className="rounded-xl shadow overflow-hidden aspect-video w-full max-w-md border-4 border-blue-100 mb-4">
                      <iframe
                        src={item.url}
                        className="w-full h-52 md:h-60 rounded-xl"
                        title={item.title}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <h3 className="font-semibold text-blue-900 text-lg mb-1 text-center">{item.title}</h3>
                    <div className="mb-2 text-blue-700 text-sm">{item.author}</div>
                    <div className="text-gray-600 text-center">{item.caption}</div>
                  </>
                )}
                {item.type === "instagram" && (
                  <>
                    <span className="mb-1 text-pink-600 text-3xl"><FaInstagram /></span>
                    <div className="rounded-xl shadow overflow-hidden aspect-square w-40 h-40 border-4 border-blue-100 mb-4">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl"/>
                      </a>
                    </div>
                    <h3 className="font-semibold text-blue-900 text-lg mb-1 text-center">{item.title}</h3>
                    <div className="mb-2 text-blue-700 text-sm">{item.author}</div>
                    <div className="text-gray-600 text-center">{item.caption}</div>
                  </>
                )}
                {item.type === "quote" && (
                  <blockquote className="max-w-xl mx-auto flex flex-col items-center">
                    <FaQuoteLeft className="text-blue-400 text-4xl mb-2" />
                    <span className="text-xl md:text-2xl text-blue-800 font-bold text-center mb-4 leading-snug">
                      “{item.quote}”
                    </span>
                    <span className="text-blue-700 text-base font-medium mt-2">{item.author}</span>
                  </blockquote>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
