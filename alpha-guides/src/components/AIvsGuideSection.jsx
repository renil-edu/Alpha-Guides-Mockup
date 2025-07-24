export default function AIvsGuideSection() {
    return (
      <section className="py-20 bg-gradient-to-br from-[#e6f0ff] via-white to-[#f7fcff] border-t border-b border-blue-100 relative overflow-hidden">
        <svg className="absolute right-0 top-0 h-44 w-44 opacity-20 z-0" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="90" fill="#4EC9F8"/>
        </svg>
        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">What Does AI Handle and What Does a Guide Handle?</h2>
          <div className="grid md:grid-cols-2 gap-14">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm flex flex-col items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" alt="AI Brain" className="w-16 h-16 mb-3"/>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">AI handles:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base text-left">
                <li>Grading and data analysis</li>
                <li>Personalized learning recommendations</li>
                <li>Real-time feedback and assessment</li>
              </ul>
            </div>
            <div className="bg-blue-100 border border-blue-200 rounded-2xl p-8 shadow-lg flex flex-col items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Guide" className="w-16 h-16 mb-3"/>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Guides focus on:</h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-900 text-base text-left">
                <li>One-on-one mentoring and motivating students to reach their potential</li>
                <li>Leading workshops and activities that promote social-emotional learning</li>
                <li>Fostering community and belonging among students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  