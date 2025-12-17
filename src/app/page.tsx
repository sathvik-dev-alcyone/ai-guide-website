import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import QuickFlowSection from '@/components/landing/quick-flow-section';
import WhyThisSystemExists from '@/components/landing/why-this-system-exists';
import StepByStepGuide from '@/components/landing/step-by-step-guide';
import AudienceSection from '@/components/landing/audience-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <QuickFlowSection />
        <WhyThisSystemExists />
        <StepByStepGuide />
        <AudienceSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
