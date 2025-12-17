import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
          AI Maintenance Reporter — User Guide
        </h1>
        <p className="mt-4 text-2xl lg:text-3xl text-muted-foreground font-light">
          How to Report a Campus Maintenance Issue
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          This guide explains how students and staff can report maintenance issues on campus using the AI Maintenance Reporter system.
        </p>
        <div className="mt-10">
          <a href="https://ai-maintainance-reporter.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform duration-200 hover:scale-105 rounded-full">
              Report an Issue Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
