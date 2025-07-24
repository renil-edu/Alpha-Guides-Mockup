import { useState } from "react";

const cardData = [
  {
    front: {
      title: "Traditional Education",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
      bullets: [
        { icon: "📚", text: "Deliver content via lectures" },
        { icon: "⏰", text: "Set the pace for the class" },
        { icon: "✅", text: "Focus on curriculum completion" },
        { icon: "🔖", text: "Provide grades as final judgment" },
        { icon: "📑", text: "One-size-fits-all instruction" },
        { icon: "🧑‍🏫", text: "Manage classroom discipline" },
        { icon: "📝", text: "Teach to the test" },
        { icon: "👮‍♂️", text: "Primarily authority figures" },
        { icon: "⏳", text: "Rarely give time for self-directed work" },
        { icon: "🧠", text: "Emphasize content retention" }
      ]
    },
    back: {
      headline: "How Traditional Teaching Works",
      points: [
        "Most classrooms follow a standard, fixed curriculum for all students.",
        "Success is driven by standardized test scores, rarely by individual growth.",
        "Assessment is primarily focused on exams and rote recall.",
        "Little focus on mentorship, real-world skills, or modern technology.",
        "Students may achieve high scores, but long-term engagement often fades."
      ]
    },
    colors: {
      card: "bg-white",
      text: "text-gray-900",
      shadow: "shadow-lg",
      border: "border border-gray-200",
      button: "bg-white text-blue-700 border-blue-200"
    }
  },
  {
    front: {
      title: "Alpha Guides",
      image: "https://images.unsplash.com/photo-1455448972184-de647495d428?auto=format&fit=crop&w=400&q=80",
      bullets: [
        { icon: "🤝", text: "Coach students through problem-solving and goal-setting" },
        { icon: "🏃‍♂️", text: "Let students move at their own pace based on mastery" },
        { icon: "🌱", text: "Focus on real learning and growth over checkboxes" },
        { icon: "🔁", text: "Use feedback and reflection to guide iteration" },
        { icon: "🎯", text: "Create personalized plans based on strengths and goals" },
        { icon: "🤗", text: "Build trust, autonomy, and accountability with students" },
        { icon: "✨", text: "Inspire curiosity and deeper understanding" },
        { icon: "🧑‍🤝‍🧑", text: "Act as mentors and partners in learning" },
        { icon: "⏱️", text: "Encourage daily independent work and time management" },
        { icon: "🚀", text: "Emphasize skill-building, leadership, and agency" }
      ]
    },
    back: {
      headline: "How Alpha Guides Excel",
      points: [
        "Each student is paired with a Guide and powerful AI tools.",
        "Learning is driven by curiosity, passions, and real project outcomes.",
        "Mentors support personal growth, provide accountability, and challenge students.",
        "AI feedback enables faster mastery and tailored learning experiences.",
        "Alpha grads are confident, adaptable, and prepared for college, careers, and life."
      ]
    },
    colors: {
      card: "bg-blue-600",
      text: "text-white",
      shadow: "shadow-2xl",
      border: "border border-blue-400",
      button: "bg-white text-blue-700 border-blue-200"
    }
  }
];

export default function GlassComparison() {
  const [flipped, setFlipped] = useState([false, false]);

  const flipCard = idx =>
    setFlipped(s =>
      [
        ...s.slice(0, idx),
        !s[idx],
        ...s.slice(idx + 1)
      ]
    );

  return (
    <section className="relative py-24 px-2 md:px-8 lg:px-24 overflow-hidden min-h-[900px] bg-[#f3f7ff]">
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 text-center mb-3 drop-shadow-lg">
          Traditional vs. Alpha Guides
        </h1>
        <p className="text-center text-lg text-gray-700 mb-14">
          Tap or click a card to see more.
        </p>
        <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-center justify-center">
          {[0, 1].map(idx => {
            const { front, back, colors } = cardData[idx];
            return (
              <div
                key={idx}
                className="relative"
                style={{ perspective: "1600px" }}
              >
                <div
                  className={`
                    w-[370px] h-[760px] md:w-[440px] md:h-[900px]
                    rounded-3xl ${colors.card} ${colors.shadow} ${colors.border}
                    transition-transform duration-300
                    [transform-style:preserve-3d]
                    ${flipped[idx] ? '[transform:rotateY(180deg)]' : ''}
                    cursor-pointer
                    flex flex-col items-center
                  `}
                  tabIndex={0}
                  style={{
                    transition: "transform 0.32s cubic-bezier(.38,1.15,.7,1.07)"
                  }}
                  onClick={() => flipCard(idx)}
                  onKeyDown={e =>
                    ["Enter", " "].includes(e.key) && flipCard(idx)
                  }
                  aria-label={`Flip card for ${front.title}`}
                >
                  {/* Card Front */}
                  <div
                    className={`absolute w-full h-full flex flex-col items-center px-8 pt-10 pb-10 ${colors.card} ${colors.text} rounded-3xl`}
                    style={{
                      backfaceVisibility: "hidden",
                      zIndex: 4
                    }}
                  >
                    <img
                      src={front.image}
                      className="mb-8 w-36 h-36 md:w-44 md:h-44 object-cover rounded-xl shadow-md border-4 border-white"
                      alt={front.title}
                      draggable="false"
                    />
                    <h2 className="font-bold text-2xl md:text-3xl mb-8 mt-2 text-center">
                      {front.title}
                    </h2>
                    <ul className="space-y-5 mb-8">
                      {front.bullets.map((b, i) => (
                        <li
                          key={i}
                          className={`flex items-center text-lg md:text-xl font-semibold`}
                        >
                          <span className="mr-3 text-2xl">{b.icon}</span>
                          <span>{b.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex-1" />
                    <button
                      className={`w-[190px] mt-6 py-3 rounded-full font-semibold ${colors.button}
                        border shadow text-lg focus:outline-none active:scale-95 transition`}
                      type="button"
                      style={{
                        position: "absolute",
                        bottom: "2.2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 5
                      }}
                      aria-label={`Flip to see more about ${front.title}`}
                    >
                      More Info
                    </button>
                  </div>
                  {/* Card Back */}
                  <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center px-8 py-10 rounded-3xl ${colors.card} ${colors.text}`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      zIndex: 5
                    }}
                  >
                    <h2 className="font-bold text-xl md:text-2xl mb-6 text-center">{back.headline}</h2>
                    <ul className="mb-12 space-y-5">
                      {back.points.map((p, i) => (
                        <li key={i} className="text-base md:text-lg font-medium">{p}</li>
                      ))}
                    </ul>
                    <div className="flex-1" />
                    <button
                      className={`w-[190px] mt-6 py-3 rounded-full font-semibold ${colors.button}
                        border shadow text-lg focus:outline-none active:scale-95 transition`}
                      type="button"
                      style={{
                        position: "absolute",
                        bottom: "2.2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 5
                      }}
                      aria-label={`Flip back to main side for ${front.title}`}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
