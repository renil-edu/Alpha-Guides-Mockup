// src/components/ComparisonCheckTable.jsx
import { FaCheck, FaTimes } from "react-icons/fa";

const FEATURES = [
  { feature: "Coach students through problem-solving & goal-setting", traditional: false, alpha: true },
  { feature: "Let students move at their own pace", traditional: false, alpha: true },
  { feature: "Focus on real learning & growth over checkboxes", traditional: false, alpha: true },
  { feature: "Use feedback & reflection to guide iteration", traditional: false, alpha: true },
  { feature: "Personalized plans based on strengths & goals", traditional: false, alpha: true },
  { feature: "Build trust, autonomy, and accountability", traditional: false, alpha: true },
  { feature: "Inspire curiosity & deeper understanding", traditional: false, alpha: true }
];

export default function ComparisonCheckTable() {
  return (
    <section className="pt-0 pb-20 bg-[#f3f7ff] -mt-2">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Real Differences: Alpha Guides vs. Traditional Teachers
        </h2>
        <div className="overflow-x-auto bg-white p-6 rounded-2xl shadow border border-blue-100">
          <table className="w-full text-base md:text-lg">
            <thead>
              <tr>
                <th className="py-4 px-3 text-blue-700 text-left text-lg md:text-xl font-bold">Feature</th>
                <th className="py-4 px-3 text-gray-700 text-center text-lg md:text-xl font-bold">Traditional</th>
                <th className="py-4 px-3 text-blue-700 text-center text-lg md:text-xl font-bold">Alpha Guides</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row, i) => (
                <tr key={row.feature} className={i%2 ? "bg-blue-50/50 hover:bg-blue-100/80 transition" : "hover:bg-blue-100/70"}>
                  <td className="py-3 px-3">{row.feature}</td>
                  <td className="py-3 px-3 text-center">
                    {row.traditional
                      ? <FaCheck className="text-green-500 mx-auto text-lg" />
                      : <FaTimes className="text-gray-300 mx-auto text-lg" />}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.alpha
                      ? <FaCheck className="text-green-500 mx-auto text-lg" />
                      : <FaTimes className="text-gray-300 mx-auto text-lg" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
