import AlphaHeader from "./components/AlphaHeader";
import AlphaHeroSection from "./components/AlphaHeroSection";
import ComparisonCheckTable from "./components/ComparisonCheckTable";
import AIvsGuideSection from "./components/AIvsGuideSection";
import GuideTrainingSection from "./components/GuideTrainingSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TestimonialsQuotesSection from "./components/TestimonialsQuotesSection";
import GetStartedSection from "./components/GetStartedSection";

function App() {
  return (
    <div>
      <AlphaHeader />
      <AlphaHeroSection />
      <ComparisonCheckTable />
      <AIvsGuideSection />
      <GuideTrainingSection />
      <TestimonialCarousel />
      <TestimonialsQuotesSection />
      <GetStartedSection />
    </div>
  );
}

export default App;
