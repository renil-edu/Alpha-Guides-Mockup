// src/components/GuideTrainingSection.jsx

import { FaFlagCheckered, FaChalkboardTeacher, FaUserCheck, FaBrain, FaUserFriends, FaCertificate } from "react-icons/fa";

export default function GuideTrainingSection() {
  return (
    <section id="guide-training" className="py-20 bg-[#f3f7ff] border-b border-blue-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">
          Guide Training at Alpha: Empowering Exceptional Educators
        </h2>

        {/* Guide Training Program Description */}
        <div className="bg-white rounded-2xl shadow border border-blue-100 p-8 mb-12 text-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">
            What is Alpha’s Guide Training Program?
          </h3>
          <p className="mb-3">
            Alpha's Guide Training Program is a comprehensive 4-week teacher development system that transforms exceptional educators into innovative learning facilitators.
            Our program combines rigorous hiring, intensive training, and ongoing mentorship to ensure guides deliver on Alpha's "3 Commitments": <b>Love School</b>, <b>Learn 2x</b>, and <b>Learn LifeSkills</b>.
          </p>
        </div>

        {/* Hiring Process Infographic */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Rigorous Hiring Process: Setting the Bar High
          </h3>
          <h4 className="text-lg font-bold text-blue-400 mb-2">How Does Alpha’s Teacher Hiring Process Work?</h4>
          <div className="bg-blue-50 rounded-2xl border border-blue-200 shadow p-7 md:p-10 flex flex-col md:flex-row items-start gap-7 md:gap-4 mb-3">
            {/* Steps -- visually separated into columns for infographic feel */}
            <div className="flex-1">
              <FaFlagCheckered className="text-blue-600 text-3xl mb-2" />
              <p className="text-xl font-semibold text-blue-800 mb-1">Weeks 1-2: Application & Screening</p>
              <ul className="list-disc pl-6 text-blue-900 mb-2">
                <li>Submit teaching application and portfolio</li>
                <li>Initial candidate review and selection</li>
                <li>Background verification begins</li>
              </ul>
              <FaChalkboardTeacher className="text-blue-600 text-3xl mb-2" />
              <p className="text-xl font-semibold text-blue-800 mb-1">Weeks 3-4: Virtual Assessment Phase</p>
              <ul className="list-disc pl-6 text-blue-900 mb-2">
                <li>Video interviews with education specialists</li>
                <li>Teaching philosophy evaluation</li>
                <li>Subject matter expertise testing</li>
                <li>Communication skills assessment</li>
              </ul>
            </div>
            <div className="flex-1">
              <FaUserFriends className="text-blue-600 text-3xl mb-2" />
              <p className="text-xl font-semibold text-blue-800 mb-1">Weeks 5-6: In-Person Evaluation</p>
              <ul className="list-disc pl-6 text-blue-900 mb-2">
                <li>Live teaching demonstrations</li>
                <li>Classroom management observations</li>
                <li>Student interaction assessments</li>
                <li>Cultural fit interviews</li>
              </ul>
              <FaUserCheck className="text-blue-600 text-3xl mb-2" />
              <p className="text-xl font-semibold text-blue-800 mb-1">Week 7: Shadow Day Experience</p>
              <ul className="list-disc pl-6 text-blue-900 mb-2">
                <li>Full-day classroom immersion</li>
                <li>Direct student interaction</li>
                <li>Current guide mentorship</li>
                <li>Real-world teaching scenarios</li>
              </ul>
            </div>
            <div className="flex-1">
              <FaCertificate className="text-blue-600 text-3xl mb-2" />
              <p className="text-xl font-semibold text-blue-800 mb-1">Weeks 8-10: Final Selection & Onboarding</p>
              <ul className="list-disc pl-6 text-blue-900 mb-2">
                <li>Comprehensive reference checks</li>
                <li>Job offer and contract negotiation</li>
                <li>Culture orientation and policy training</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training Phases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">What Training Do Alpha Guides Receive?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex-1 flex flex-col items-center">
              <FaBrain className="text-blue-700 text-2xl mb-3"/>
              <h4 className="font-bold text-blue-700 mb-1">Phase 1: Asynchronous Learning (2 Weeks)</h4>
              <ul className="list-disc pl-6 text-blue-900">
                <li>Online curriculum modules</li>
                <li>Interactive teaching simulations</li>
                <li>Technology platform mastery</li>
                <li>Assessment methodology training</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex-1 flex flex-col items-center">
              <FaUserFriends className="text-blue-700 text-2xl mb-3"/>
              <h4 className="font-bold text-blue-700 mb-1">Phase 2: Intensive In-Person Training (2 Weeks)</h4>
              <ul className="list-disc pl-6 text-blue-900">
                <li>Hands-on classroom practice</li>
                <li>Peer coaching sessions</li>
                <li>Mentorship pairing</li>
                <li>Real student interactions</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex-1 flex flex-col items-center">
              <FaCertificate className="text-blue-700 text-2xl mb-3"/>
              <h4 className="font-bold text-blue-700 mb-1">Phase 3: Ongoing Development (Continuous)</h4>
              <ul className="list-disc pl-6 text-blue-900">
                <li>Weekly mentoring sessions</li>
                <li>Monthly professional development workshops</li>
                <li>Quarterly teaching evaluations</li>
                <li>Annual conference attendance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Components */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Key Components of Alpha Guides’ Training</h3>
          {/* 3 columns for visual break-up */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-5 shadow flex flex-col items-center">
              <FaBrain className="text-blue-800 text-3xl mb-2"/>
              <h4 className="font-bold text-blue-700">Research-Based Teaching Methods</h4>
              <p className="text-blue-900 mt-1 text-center">Incorporates proven educational research and evidence-based coaching techniques with measurable outcomes.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 shadow flex flex-col items-center">
              <FaFlagCheckered className="text-blue-800 text-3xl mb-2"/>
              <h4 className="font-bold text-blue-700">The 3 Commitments Framework</h4>
              <ul className="text-blue-900 text-sm mt-1 list-disc pl-5 text-left">
                <li><b>Love School:</b> Creating engaging, positive environments</li>
                <li><b>Learn 2x:</b> Accelerating growth with innovation</li>
                <li><b>Learn LifeSkills:</b> Nurturing EQ, character, real-world skills</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 shadow flex flex-col items-center">
              <FaUserCheck className="text-blue-800 text-3xl mb-2"/>
              <h4 className="font-bold text-blue-700">Comprehensive Support Systems</h4>
              <ul className="text-blue-900 text-sm mt-1 list-disc pl-5 text-left">
                <li>Weekly one-on-one mentoring</li>
                <li>Training resource library</li>
                <li>Ongoing professional development</li>
                <li>Structured feedback & evaluation cycles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What makes Alpha Guides Different */}
        <div className="bg-white rounded-2xl shadow border border-blue-100 p-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">What makes Alpha Guides Different?</h3>
          <ul className="list-disc pl-6 mb-2 text-blue-900">
            <li>AI-enhanced learning technologies</li>
            <li>Personalized curriculum delivery</li>
            <li>Student-centered coaching methods</li>
            <li>Character development techniques</li>
            <li>Real-world skill application</li>
          </ul>
          <p className="mt-4 text-gray-800">
            At Alpha, we don't just train guides—we develop educational leaders who are equipped to redefine what's possible in a student's learning journey.
            Every guide who joins our team has been carefully selected and comprehensively prepared to deliver on our promise: helping every student love school while achieving academic excellence and developing essential life skills.
          </p>
        </div>
      </div>
    </section>
  );
}
